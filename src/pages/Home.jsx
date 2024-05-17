import { useEffect, useRef, useState } from 'react';
import { usePhotos } from '@/hooks';
import { useToast } from '@/stores';
import { Image, Loading, Navigation } from '@/components';

export const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, photos, hasMore } = usePhotos(page);
  const addToast = useToast((state) => state.addToast);

  const observer = useRef();
  const lastPhoto = useRef();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (lastPhoto.current) observer.current.observe(lastPhoto.current);
  }, [lastPhoto, hasMore]);

  useEffect(() => {
    if (error) {
      addToast('Failed to fetch photos! Try again later.', 'error');
    }
  }, [error, addToast]);

  return (
    <div className="h-screen w-full bg-background p-10">
      <Navigation />
      {loading && <Loading />}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-7 px-4 pb-4 pt-12">
          {photos.map((photo, index) => {
            if (photos.length === index + 1) {
              return (
                <div key={photo.id} ref={lastPhoto}>
                  <Image className="grow basis-52" data={photo} />
                </div>
              );
            }

            return <Image className="grow basis-52" data={photo} key={photo.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
