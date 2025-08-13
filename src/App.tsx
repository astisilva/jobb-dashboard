import JobForm from './components/JobForm';
import { useEffect, useState } from 'react';
import JobList from './components/JobList';
import type { Job, JobFormData } from './types/job';
/* import './App.css'; */

const PAGE_TITLE = "Application Tracker";

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


const removeJob = (id:string) => {console.log("tar bort:", id); setJobs(prev=>prev.filter(j=>j.id !== id))
}


  return (
 <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-5">
          <h1 className="text-xl font-semibold">{PAGE_TITLE}</h1>
          <p className="text-sm/6 text-slate-600">
            Lägg till ansökningar, håll koll på status och anteckningar.
          </p>
        </div>
      </header>

      {/* Innehåll */}
      <main className="mx-auto max-w-5xl px-4 py-8 grid gap-8 md:grid-cols-[380px_1fr]">
        <section className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-5">
          <h2 className="text-base font-semibold mb-4">Ny ansökan</h2>
          <JobForm onAddJob={addJob} />
        </section>

        <section className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-5">
          <h2 className="text-base font-semibold mb-4">Dina ansökningar</h2>
          <JobList jobs={jobs} onDelete={removeJob} />
        </section>
      </main>
    </div>
  );
}

export default App;

