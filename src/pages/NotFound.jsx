import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-8xl font-black text-text duration-300 ease-out sm:text-9xl">404</div>
        <h2 className="text-base font-bold text-text duration-300 ease-out sm:text-lg">
          Page Not Found
        </h2>
      </div>
      <Link
        to="/"
        className="rounded bg-pexels-green px-4 py-2 text-sm font-semibold text-white shadow-3d duration-300 ease-out hover:shadow-none active:scale-95 active:duration-150 sm:text-base"
      >
        Go Home
      </Link>
    </div>
  );
};
