// /app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "JobPlacement",
  description: "Find jobs, apply easily, and manage applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <main className="px-4 md:px-12 lg:px-24 py-8">{children}</main>
      </body>
    </html>
  );
}
