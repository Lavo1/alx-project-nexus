import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <Header />

      <h1 className="text-3xl font-semibold">Welcome to JobPlacement</h1>
      <p className="text-gray-600 mt-2">Find the right job today.</p>
    </div>
  );
}
