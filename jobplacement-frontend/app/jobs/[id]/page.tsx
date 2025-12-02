import Header from "@/components/Header";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = params.id;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="px-6 py-10 max-w-3xl mx-auto">
        {/* Job Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Senior Software Engineer</h1>
          <p className="text-gray-600 mt-2">TechCorp • Pretoria, South Africa</p>
          <p className="text-gray-500 mt-1">Posted 3 days ago</p>
        </div>

        {/* Job Tags */}
        <div className="flex gap-2 mb-6">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md">Full-time</span>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-md">Senior</span>
          <span className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-md">Hybrid</span>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor massa nec 
            lorem pretium, vitae bibendum neque gravida. 
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Responsibilities:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Build new features using React & Next.js</li>
            <li>Collaborate with backend teams</li>
            <li>Maintain code quality and documentation</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-2">Requirements:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>5+ years experience in software engineering</li>
            <li>Strong knowledge of JavaScript / TypeScript</li>
            <li>Experience with REST APIs</li>
          </ul>

          {/* Apply Button */}
          <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
