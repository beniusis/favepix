import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Toasts } from '@/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Favorites, Home, NotFound } from '@/pages';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toasts />
    <Router basename="/favepix/">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
