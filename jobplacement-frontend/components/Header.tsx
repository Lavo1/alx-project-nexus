import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center">
      <Link href="/">
        <Image
          src="/logo.png"          // make sure this matches your file name
          alt="Job Placement Logo"
          width={120}
          height={40}
          priority
        />
      </Link>
    </header>
  );
}

