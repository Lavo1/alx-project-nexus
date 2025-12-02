"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Login
        </h1>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter your email"
          />
        </label>

        {/* Password */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Enter your password"
          />
        </label>

        {/* Button */}
        <button
          className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
        >
          Sign In
        </button>

        {/* Links */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-700 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
