import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="JobPlacement Logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-2xl font-bold text-gray-800">JobPlacement.com</h1>
      </div>
    </header>
  );
}
