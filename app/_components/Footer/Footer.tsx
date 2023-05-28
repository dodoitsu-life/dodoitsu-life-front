export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 bottom-0 absolute w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li></li>
          </ul> */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 dodoitsu-life
        </span>
      </div>
    </footer>
  );
};
