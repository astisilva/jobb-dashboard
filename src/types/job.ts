// src/types/job.ts
export type Job = {
  id: string;
  company: string;
  role: string;
  status: string; // "Sökt" | "Intervju" | "Avvaktande" | "Färdig" kan vi göra senare
  note: string;
  date: string; // ISO YYYY-MM-DD
};

export type JobFormData = Omit<Job, "id">;
