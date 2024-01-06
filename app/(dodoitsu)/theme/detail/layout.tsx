export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section id="contents" className="mb-20">
      {children}
    </section>
  );
}
