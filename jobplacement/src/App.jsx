import React from 'react'
import { JobsProvider } from './context/JobsContext'
import JobBoard from './pages/JobBoard'

export default function App(){
  return (
    <JobsProvider>
      <div className="min-h-screen container mx-auto p-4">
        <header className="mb-6 flex items-center gap-4">
          <img src="/assets/logo.png" alt="JobPlacement logo" className="w-14 h-14" />
          <div>
            <h1 className="text-2xl font-bold">jobplacement.com</h1>
            <p className="text-sm text-slate-500">Find your next role — fast</p>
          </div>
        </header>

        <main>
          <JobBoard />
        </main>

        <footer className="mt-12 text-xs text-center text-slate-500">© {new Date().getFullYear()} jobplacement.com — Demo platform</footer>
      </div>
    </JobsProvider>
  )
}
