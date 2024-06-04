import { useEffect, useRef, useState } from 'react';
import { usePhotos } from '@/hooks';
import { useToast } from '@/stores';
import { Header, Image, Loading } from '@/components';

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
    <>
      <Header />

      {loading && <Loading />}

      <main className="mt-12 flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-7">
          {photos.map((photo, index) => {
            if (photos.length === index + 1) {
              return (
                <Image className="grow basis-52" data={photo} key={photo.id} ref={lastPhoto} />
              );
            }

            return <Image className="grow basis-52" data={photo} key={photo.id} />;
          })}
        </div>
      </main>
    </>
  );
};
