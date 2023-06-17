export default function Layout({
  children,
  latests,
  populars,
}: {
  children: React.ReactNode;
  latests: React.ReactNode;
  populars: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full max-w-7xl mt-12">{children}</div>
      <section id="yesterday-bests" className="mt-24">
        <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          人気の都々逸
        </h2>
        <div className="mt-7 text-center">
          <div className="mb-5">{populars}</div>
        </div>
      </section>

      <section id="yaesterday-posts" className="my-24">
        <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
          最新の都々逸
        </h2>

        <div className="mt-7 text-center">{latests}</div>
      </section>
    </div>
  );
}
