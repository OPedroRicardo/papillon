import { createContext, useState, ReactNode, useEffect } from 'react';

interface MenuGuideContextData {
    isActive: boolean;
    openMenu: () => void;
}

export const MenuGuideContext = createContext({} as MenuGuideContextData);

export function MenuGuideProvider({ children, ...rest }) {
    const [isActive, setIsActive] = useState(false);

    function openMenu() {
        setIsActive(true);
    }

    return(
        <MenuGuideContext.Provider value={{
            isActive,
            openMenu,
        }}>
        {children}

        </MenuGuideContext.Provider>
    )
}