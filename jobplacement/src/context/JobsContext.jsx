import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchJobs } from '../api/mockApi'

const JobsContext = createContext()

export function JobsProvider({ children }){
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [filters, setFilters] = useState({ category: 'All', location: 'All', level: 'All' })

  useEffect(()=>{
    setLoading(true)
    fetchJobs()
      .then((data)=> setJobs(data))
      .catch((err)=> setError(err.message || 'Error fetching jobs'))
      .finally(()=> setLoading(false))
  },[])

  const filtered = jobs.filter(job => {
    const byCategory = filters.category === 'All' || job.category === filters.category
    const byLocation = filters.location === 'All' || job.location === filters.location
    const byLevel = filters.level === 'All' || job.level === filters.level
    return byCategory && byLocation && byLevel
  })

  return (
    <JobsContext.Provider value={{ jobs: filtered, rawJobs: jobs, loading, error, filters, setFilters }}>
      {children}
    </JobsContext.Provider>
  )
}

export function useJobs(){
  return useContext(JobsContext)
}
