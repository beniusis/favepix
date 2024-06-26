import { useFavorite } from '@/stores';
import { Header, Image } from '@/components';

export const Favorites = () => {
  const favorites = useFavorite((state) => state.favorites);

  return (
    <>
      <Header />

      <main className="mt-12 flex flex-col items-center justify-center">
        {favorites.length === 0 && (
          <p className="text-center text-2xl font-bold text-text">No Favorite Photos</p>
        )}
        <div className="flex flex-wrap justify-center gap-7">
          {favorites.length > 0 &&
            favorites.map((photo) => (
              <Image className="grow basis-52" data={photo} key={photo.id} />
            ))}
        </div>
      </main>
    </>
  );
};
