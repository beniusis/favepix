import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Toasts } from '@/components';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toasts />
    <RouterProvider router={router} />
  </StrictMode>
);
