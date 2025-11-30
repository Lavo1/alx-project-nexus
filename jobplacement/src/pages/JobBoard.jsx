import React, { useState } from 'react'
import { useJobs } from '../context/JobsContext'
import Filters from '../components/Filters'
import JobList from '../components/JobList'
import ApplicationForm from '../components/ApplicationForm'

export default function JobBoard(){
  const { jobs, loading, error } = useJobs()
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 p-4 bg-white rounded shadow-sm">
          <Filters />
        </aside>

        <section className="md:col-span-3">
          {loading && <div className="p-6 bg-white rounded shadow text-center">Loading jobs…</div>}
          {error && <div className="p-6 bg-rose-100 border border-rose-200 rounded">{error}</div>}

          {!loading && !error && (
            <JobList jobs={jobs} onApply={(job) => setSelectedJob(job)} />
          )}
        </section>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl bg-white rounded p-6 overflow-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Apply: {selectedJob.title} — {selectedJob.company}</h2>
            <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />
          </div>
        </div>
      )}
    </div>
  )
}
