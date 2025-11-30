import React from 'react'
import JobCard from './JobCard'

export default function JobList({ jobs = [], onApply }){
  if (!jobs.length) return <div className="p-6 bg-white rounded shadow">No job postings match your filters.</div>

  return (
    <div className="grid gap-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  )
}
