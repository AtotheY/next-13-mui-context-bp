'use client';

import { useState } from 'react';
import Cookies from 'universal-cookie';
import AppContext from 'context';

export default function ContextProvider({ children, theme = 'dark' }) {
  const cookies = new Cookies();
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  const [context, setContext] = useState({});

  const toggleDarkMode = () => {
    cookies.set('darkMode', !darkMode);
    setDarkMode(current => !current);
  };

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...context, darkMode, toggleDarkMode, setContext }}
    >
      {children}
    </AppContext.Provider>
  );
}
