import { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

function useDarkMode(): DarkModeContextType {
    const context = useContext(DarkModeContext);
    if (context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider');
    return context;
}

export default useDarkMode;
