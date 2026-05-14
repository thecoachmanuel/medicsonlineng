import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/index.css';
import App from '@/App.tsx';
import AdminContextProvider from '@/context/AdminContext';
import DoctorContextProvider from '@/context/DoctorContext';
import AppContextProvider from '@/context/AppContext';
import { ThemeProvider } from '@/components/common/theme-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AdminContextProvider>
          <DoctorContextProvider>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </DoctorContextProvider>
        </AdminContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
