export default function SuccessPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Application Submitted!
        </h1>

        <p className="text-gray-700 mb-6">
          Your application has been successfully sent. Our team or the employer
          will review it if successful contact you.
        </p>

        <a
          href="/jobs"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Back to Job Listings
        </a>
      </div>
    </div>
  );
}
