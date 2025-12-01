import { getJobs } from "@/lib/jobs";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>

      <ul className="space-y-4">
        {jobs.map((job: any) => (
          <li key={job.id} className="p-4 border rounded shadow bg-white">
            <h2 className="font-semibold">{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
