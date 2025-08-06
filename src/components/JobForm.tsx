import { useState } from 'react';

function JobForm() {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: react.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Företag:', company);
    console.log('Roll:', role);
    console.log('Status:', status);
    setCompany('');
    setRole('');
    setStatus('');
  };

  return (
    <>
      <div>JobForm</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foretag">Företag:</label>
        <input
          id="foretag"
          type="text"
          value={company}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e);
            setCompany(e.target.value);
          }}
        />
        <label htmlFor="roll">Roll:</label>
        <input
          id="roll"
          type="text"
          value={role}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e);
            setRole(e.target.value);
          }}
        />

        <label htmlFor="status">Status:</label>
        <select name="status" id="status" value={status} onChange={}>
          <option value="">Välj status</option>
          <option value="Sökt">Sökt</option>
          <option value="Intervju">Intervju</option>
          <option value="Avvaktande">Avvaktande</option>
          <option value="Färdig">Färdig</option>
        </select>

        <button type="submit">Lägg till:</button>
      </form>
    </>
  );
}

export default JobForm;
