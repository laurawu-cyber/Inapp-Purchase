import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CurrencyProvider } from './components/CurrencyProvider';
import { LanguageProvider } from './i18n/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

export default function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <RouterProvider router={router} />
        <LanguageToggle />
      </CurrencyProvider>
    </LanguageProvider>
  );
}
