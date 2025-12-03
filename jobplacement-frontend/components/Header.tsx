// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JobPlacement Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link href="/jobs" className="text-sm font-medium">
            Jobs
          </Link>

          <Link href="/login" className="text-sm font-medium">
            Sign in
          </Link>
        </nav>

      </div>
    </header>
  );
}


