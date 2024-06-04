import { forwardRef } from 'react';
import { useFavorite } from '@/stores';
import { useToast } from '@/stores';
import PropTypes from 'prop-types';

export const Image = forwardRef(function Image(props, ref) {
  const { data } = props;

  const isFavorite = useFavorite((state) => state.isFavorite(data.id));
  const addFavorite = useFavorite((state) => state.addFavorite);
  const removeFavorite = useFavorite((state) => state.removeFavorite);

  const addToast = useToast((state) => state.addToast);

  const handleImageClick = () => {
    window.open(data.src.original, '_blank');
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(data.id);
      addToast('Removed from favorites', 'success');
    } else {
      addFavorite(data);
      addToast('Added to favorites', 'success');
    }
  };

  return (
    <div
      className="group relative max-h-52 max-w-72 cursor-alias"
      title="Click to view the full-size image"
      onClick={handleImageClick}
      ref={ref}
    >
      <img
        className="size-full rounded-lg object-cover shadow-lg group-hover:brightness-50"
        src={data.src.large}
        alt={data.alt}
        loading="lazy"
      />

      <div className="absolute left-1/2 top-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 p-4 group-hover:flex">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-center text-base font-black capitalize text-white">
            {data.alt || 'Untitled'}
          </h2>
          <hr className="mt-1 w-16 border border-white" />
          <span className="text-sm font-medium capitalize italic text-white">
            {data.photographer}
          </span>
        </div>
        <button
          className="cursor-pointer rounded-2xl border-2 border-white bg-transparent px-4 py-2 text-base font-medium text-white hover:bg-white hover:text-text"
          onClick={handleButtonClick}
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </div>
  );
});

Image.propTypes = {
  data: PropTypes.object.isRequired
};
