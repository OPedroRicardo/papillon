import { createContext, useState, ReactNode, useEffect } from 'react';

interface MediaContextData {
    mediaWidth: number;
}

export const MediaContext = createContext({} as MediaContextData);

export function MediaContextProvider({ children, ...rest }) {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth);

    () => {
        setMediaWidth(window.innerWidth);
    }

    return(
        <MediaContext.Provider value ={{
            mediaWidth,
        }}>
        {children}
        </MediaContext.Provider>
    )
}