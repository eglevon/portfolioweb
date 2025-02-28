import { createContext, ReactNode, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

type DarkModeProviderProps = {
    children: ReactNode;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(false, 'isDarkMode');

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        [isDarkMode]
    );

    function toggleDarkMode() {
        setIsDarkMode((isDark) => !isDark);
    }

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

export { DarkModeProvider, DarkModeContext };
