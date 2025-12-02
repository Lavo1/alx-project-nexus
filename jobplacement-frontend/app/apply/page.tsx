"use client";

import { useState } from "react";

export default function ApplicationFormPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Application submitted (frontend-only demo)");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Apply for this Job</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full rounded-lg border px-3 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border px-3 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            className="w-full rounded-lg border px-3 py-2"
            onChange={handleChange}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="w-full"
            onChange={handleFileChange}
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block font-medium mb-1">Cover Letter (optional)</label>
          <textarea
            name="coverLetter"
            rows={5}
            className="w-full rounded-lg border px-3 py-2"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
