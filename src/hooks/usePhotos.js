import { useEffect, useState } from 'react';

const DEFAULT_PER_PAGE = 30;

export const usePhotos = (page) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setHasMore(false);

    fetch(`https://beniusis.vercel.app/api/images?page=${page}&per_page=${DEFAULT_PER_PAGE}`)
      .then((response) => response.json())
      .then((response) => {
        setPhotos((prevPhotos) => [
          ...prevPhotos,
          ...response.photos.filter(
            (photo) => !prevPhotos.some((prevPhoto) => prevPhoto.id === photo.id)
          )
        ]);

        if (response.next_page) setHasMore(true);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [page]);

  return { loading, error, photos, hasMore };
};
