import type { Job } from '../types/job';



type JobListProps = {
  jobs: Job[];
};

function JobList({ jobs }: JobListProps) {
  return (
    <div>
      <h2>Dina jobbansökningar:</h2>
      {jobs.length === 0 ? (
        <p>Inga tillagda jobb ännu</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.company} - {job.role} {job.status} {job.note} {job.date}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;
