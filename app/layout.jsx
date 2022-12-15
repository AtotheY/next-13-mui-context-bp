import { cookies } from 'next/headers'; // Import cookies
import ContextProvider from './context-provider';
import ThemeProvider from './theme-provider';

export default function RootLayout({ children }) {
  const nextCookies = cookies();
  const cookieDarkMode = nextCookies.get('theme');

  return (
    <html lang="en">
      <body>
        <ContextProvider cookieTheme={cookieDarkMode?.value}>
          <ThemeProvider>{children}</ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
