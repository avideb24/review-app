import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import ReviewProvider from './provider/ReviewProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewProvider>
      <RouterProvider router={router} />
    </ReviewProvider>
  </StrictMode>,
)
