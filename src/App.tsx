import JobForm from './components/JobForm';
import { useEffect, useState } from 'react';
import JobList from './components/JobList';
import type { Job, JobFormData } from './types/job';
import './App.css';

function App() {
  // Läs från localStorage en gång (lazy init)
  const [jobs, setJobs] = useState<Job[]>(() => {
    const savedJobs = localStorage.getItem('jobs');
    try {
      return savedJobs ? (JSON.parse(savedJobs) as Job[]) : [];
    } catch {
      return [];
    }
  });
  //Spara när jobs ändras
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  //Lägg till jobb: skapar id här
  const addJob = (newJob: JobFormData) => {
    const job: Job = {
      id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ...newJob,
    };
    setJobs((prevJobs) => [...prevJobs, job]);
  };
  return (
    <>
      <JobForm onAddJob={addJob} />
      <JobList jobs={jobs} />
    </>
  );
}

export default App;

