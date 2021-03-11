import { createContext, useState, ReactNode, useEffect } from 'react';

interface GuideMenuContextData {
    isActive: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

export const GuideMenuContext = createContext({} as GuideMenuContextData);

export function GuideMenuProvider({ children, ...rest }) {
    const [isActive, setIsActive] = useState(false);

    function openMenu() {
        setIsActive(true);
    }

    function closeMenu() {
        setIsActive(false);
    }

    return(
        <GuideMenuContext.Provider value={{
            isActive,
            openMenu,
            closeMenu,
        }}>
        {children}
        </GuideMenuContext.Provider>
    )
}