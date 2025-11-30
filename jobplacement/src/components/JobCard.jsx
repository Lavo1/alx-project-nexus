import React from 'react'

export default function JobCard({ job, onApply }){
  return (
    <article className="p-4 bg-white rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby={`job-${job.id}`}>
      <div className="mb-3 md:mb-0">
        <h3 id={`job-${job.id}`} className="text-lg font-semibold">{job.title}</h3>
        <div className="text-sm text-slate-500">{job.company} • {job.location} • <span className="capitalize">{job.level}</span></div>
        <p className="mt-2 text-sm text-slate-600">{job.description}</p>
      </div>

      <div className="flex-shrink-0 mt-3 md:mt-0 flex gap-2 items-center">
        <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">{job.category}</span>
        <button onClick={()=> onApply(job)} className="ml-2 px-3 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Apply</button>
      </div>
    </article>
  )
}
