import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useFavorite = create(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: (id) => (get().favorites.find((f) => f.id === id) === undefined ? false : true),
      addFavorite: (favorite) => set({ favorites: get().favorites.concat(favorite) }),
      removeFavorite: (id) => set({ favorites: get().favorites.filter((f) => f.id !== id) })
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
