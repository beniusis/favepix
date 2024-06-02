import { create } from 'zustand';

const DEFAULT_TIMEOUT = 2000;

const createToast = (message, status) => {
  return {
    message,
    status,
    id: Math.random() * 1000
  };
};

export const useToast = create((set) => ({
  toasts: [],
  addToast: (message, status) => {
    const toast = createToast(message, status);

    set((state) => ({ toasts: [...state.toasts, toast] }));

    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== toast.id) }));
    }, DEFAULT_TIMEOUT);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  }
}));
