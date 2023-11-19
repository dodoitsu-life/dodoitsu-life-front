"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 flex justify-center h-full">
      <div className="w-full h-full max-w-7xl pt-8 lg:pt-12">{children}</div>
    </main>
  );
}
