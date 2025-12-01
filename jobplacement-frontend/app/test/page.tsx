import { apiGet } from "@/lib/api";

export default async function TestPage() {
  try {
    const data = await apiGet("/api/jobs/"); 
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">API Test Successful 🎉</h1>
        <pre className="mt-4 p-4 bg-gray-900 text-green-400 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">API FAILED ❌</h1>
        <p>{String(error)}</p>
      </div>
    );
  }
}
