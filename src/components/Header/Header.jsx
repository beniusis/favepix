import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="mt-10 flex flex-col items-center justify-center gap-4">
      <a
        className="duration-500 hover:scale-105 hover:opacity-50 active:scale-90 active:duration-150"
        href="https://www.pexels.com"
        target="_blank"
        aria-label="link to pexels website"
      >
        <img className="max-w-40" src="https://images.pexels.com/lib/api/pexels.png" alt="" />
      </a>
      <h1 className="sr-only">Latest images from Pexels API with infinite scroll</h1>

      <Navigation />
    </header>
  );
};
