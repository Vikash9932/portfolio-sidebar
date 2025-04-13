import { createContext } from 'react';

interface ContextType {
  path: string;
  setPath: (path: string) => void;
  icon: boolean;
  setIcon: (icon: boolean) => void;
}

const ContextFile = createContext<ContextType>({
  path: '/',
  setPath: () => {},
  icon: false,
  setIcon: () => {},
});

export default ContextFile;
