import React, { useState } from 'react'

export default function ApplicationForm({ job, onClose }){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resume, setResume] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  function validate(){
    const e = {}
    if (!name.trim()) e.name = 'Please enter your full name.'
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please enter a valid email address.'
    return e
  }

  async function handleSubmit(e){
    e.preventDefault()
    setErrors({})
    const eObj = validate()
    if (Object.keys(eObj).length){
      setErrors(eObj)
      return
    }

    setSubmitting(true)
    // simulate network request
    await new Promise(r => setTimeout(r, 700))
    setSubmitting(false)
    setSuccess(true)

    // keep modal open so user can see success and close manually (or we could auto-close)
  }

  return (
    <div>
      {!success && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-slate-600">Applying for <strong>{job.title}</strong> at <strong>{job.company}</strong>.</p>

          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded" />
            {errors.name && <div className="text-xs text-rose-600 mt-1">{errors.name}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
            {errors.email && <div className="text-xs text-rose-600 mt-1">{errors.email}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Short message / cover note</label>
            <textarea value={resume} onChange={(e) => setResume(e.target.value)} rows={5} className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" disabled={submitting} className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-60">
              {submitting ? 'Sending…' : 'Send application'}
            </button>
            <button type="button" className="px-3 py-2 rounded border" onClick={onClose}>Cancel</button>
          </div>
        </form>
      )}

      {success && (
        <div className="text-center space-y-3">
          <p className="text-slate-700">✅ Your application has been sent. The team will review your submission.</p>
          <div className="mt-2">
            <button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
