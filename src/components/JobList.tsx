import type { Job } from '../types/job';



type JobListProps = {
  jobs: Job[];
  onDelete:(id:string)=>void;
};

function JobList({ jobs, onDelete }: JobListProps) {
  return (
    <div>
      <h2>Dina jobbansökningar:</h2>
      {jobs.length === 0 ? (
        <p className="text-slate-600">Inga tillagda jobb ännu</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.company} - {job.role} {job.status} {job.note} {job.date}
            <button className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 " onClick={()=>onDelete(job.id)}>Ta bort</button>
           </li>
          ))}
          
        </ul>
      )}
    </div>
  );
}

export default JobList;
