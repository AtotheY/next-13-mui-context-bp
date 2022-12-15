'use client';

import { useState } from 'react';
import Cookies from 'universal-cookie';
import AppContext from 'context';

export default function ContextProvider({ children, cookieTheme = 'dark' }) {
  const cookies = new Cookies();
  const [theme, setTheme] = useState(cookieTheme);

  const [context, setContext] = useState({});

  const toggleTheme = () => {
    const newVal = theme === 'dark' ? 'light' : 'dark';
    setTheme(newVal);
    cookies.set('theme', newVal);
  };

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...context, theme, toggleTheme, setContext }}
    >
      {children}
    </AppContext.Provider>
  );
}
