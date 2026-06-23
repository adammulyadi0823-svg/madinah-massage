import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Menangkap dan mengabaikan "Script error." yang disebabkan oleh ekstensi browser atau CORS iframe
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.message === 'Script error.' || !event.filename) {
      console.warn('Diabaikan: "Script error" dari pihak ketiga / ekstensi browser / lingkungan sandboxed iframe.');
      event.preventDefault();
    }
  });
  window.addEventListener('unhandledrejection', (event) => {
    // Abaikan reject Promise kosong yang juga biasa disebabkan oleh ekstensi
    if (!event.reason) {
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

