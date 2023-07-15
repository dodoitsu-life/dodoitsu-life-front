import { Card } from "@components/Card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex justify-center h-full max-w-7xl py-12 px-2">
      <Card>
        <article className="prose md:prose-sm min-w-full p-8 text-xs">
          {children}
        </article>
      </Card>
    </div>
  );
}
