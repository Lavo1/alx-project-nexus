import React from 'react'
import { useJobs } from '../context/JobsContext'

const unique = (arr, key) => ['All', ...Array.from(new Set(arr.map(x => x[key]))) ]

export default function Filters(){
  const { rawJobs, filters, setFilters } = useJobs()

  const categories = unique(rawJobs, 'category')
  const locations = unique(rawJobs, 'location')
  const levels = ['All', 'Entry-Level', 'Mid-Level', 'Senior']

  const update = (k, v) => setFilters(prev => ({ ...prev, [k]: v }))

  return (
    <div aria-label="Filters">
      <h3 className="font-semibold mb-2">Filter Jobs</h3>

      <label className="block text-xs text-slate-500">Category</label>
      <select value={filters.category} onChange={(e)=> update('category', e.target.value)} className="w-full p-2 rounded mb-3 border">
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <label className="block text-xs text-slate-500">Location</label>
      <select value={filters.location} onChange={(e)=> update('location', e.target.value)} className="w-full p-2 rounded mb-3 border">
        {locations.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <label className="block text-xs text-slate-500">Experience</label>
      <select value={filters.level} onChange={(e)=> update('level', e.target.value)} className="w-full p-2 rounded mb-3 border">
        {levels.map(l => <option key={l} value={l}>{l}</option>)}
      </select>

      <p className="text-xs text-slate-400 mt-2">Tip: Combine filters to narrow results.</p>
    </div>
  )
}
