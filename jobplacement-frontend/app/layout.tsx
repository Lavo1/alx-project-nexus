import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="px-4 md:px-12 lg:px-24 py-8">{children}</main>
      </body>
    </html>
  );
}
