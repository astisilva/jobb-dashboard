import { useEffect, useState } from 'react';
import type { JobFormData } from '../types/job';

type JobFormProps = {
  onAddJob: (job: JobFormData) => void;
};

function JobForm({ onAddJob }: JobFormProps) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!date) setDate(new Date().toISOString().slice(0, 10));
  }, [date]);

  const isValid =
    Boolean(company.trim()) &&
    Boolean(role.trim()) &&
    Boolean(status) &&
    Boolean(note.trim()) &&
    Boolean(date);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddJob({
      company: company.trim(),
      role: role.trim(),
      status,
      note: note.trim(),
      date,
    });
    setCompany('');
    setRole('');
    setStatus('');
    setNote('');
    /* setDate(''); // låt bli om du vill behålla valt datum */
  };

  const fieldClass =
    'mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="foretag" className="block text-sm font-medium">
          Företag
        </label>
        <input
          id="foretag"
          name="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          autoComplete="organization"
          required
          className={fieldClass}
          placeholder="Företag"
          autoFocus
        />
      </div>

      <div>
        <label htmlFor="roll" className="block text-sm font-medium">
          Roll
        </label>
        <input
          id="roll"
          name="role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          autoComplete="organization-title"
          required
          className={fieldClass}
          placeholder="Ex: Frontendutvecklare"
        />
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className={fieldClass + ' bg-white'}
        >
          <option value="" disabled>
            Välj status
          </option>
          <option value="Sökt">Sökt</option>
          <option value="Intervju">Intervju</option>
          <option value="Avvaktande">Avvaktande</option>
          <option value="Färdig">Färdig</option>
        </select>
      </div>

      <div>
        <label htmlFor="anteckning" className="block text-sm font-medium">
          Anteckning
        </label>
        <input
          id="anteckning"
          name="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
          className={fieldClass}
          placeholder="Kort notering (kontakt, krav, m.m.)"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium">
          Datum
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Lägg till
      </button>
    </form>
  );
}

export default JobForm;
