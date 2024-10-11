import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Carousel App",
  description: "A carousel of characters built with Next.js 14 and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container-body">
        <header className="bg-white shadow-md">
          <div className="container mx-auto p-4">
            <h1 className="text-header">Carousel App</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer>
          <p>&copy; 2024 Carousel App</p>
        </footer>
      </body>
    </html>
  );
}
