export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="contents" className="mb-20">
          {children}
        </section>
      </div>
    </main>
  );
}
