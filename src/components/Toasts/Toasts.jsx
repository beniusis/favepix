import { useToast } from '@/stores';
import { Toast } from './Toast';

export const Toasts = () => {
  const toasts = useToast((state) => state.toasts);

  return (
    <div className="fixed right-2 top-2 z-10 flex flex-col items-end justify-center gap-2">
      {toasts.map((toast) => (
        <Toast message={toast.message} status={toast.status} id={toast.id} key={toast.id} />
      ))}
    </div>
  );
};
