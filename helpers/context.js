import { useContext } from 'react';
import AppContext from 'context/index';

export const useLocalContext = () => useContext(AppContext);
