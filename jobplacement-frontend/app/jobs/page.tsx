import Image from "next/image";

export default function JobListPage() {
  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-3xl font-semibold mb-8">Available Jobs</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Job Card */}
        <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <Image
            src="/logo.png" 
            alt="Company logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-xl font-bold">Frontend Developer</h2>
          <p className="text-gray-600 mt-1">Pretoria • Full-time</p>

          <div className="flex gap-2 mt-4">
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Remote
            </span>
          </div>

          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Apply
          </button>
        </div>

        
        <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <h2 className="text-xl font-bold">Backend Developer</h2>
          <p className="text-gray-600 mt-1">Johannesburg • Hybrid</p>
          <div className="flex gap-2 mt-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              Django
            </span>
          </div>
          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
