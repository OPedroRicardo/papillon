import { createContext, useState, ReactNode, useEffect } from 'react';

interface MediaContextData {
    mediaWidth: number;
}

export const MediaContext = createContext({} as MediaContextData);

export function GuideMenuProvider({ children, ...rest }) {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth);

    function takeWindowWidth() {
        setMediaWidth(window.innerWidth);
        return mediaWidth;
    }

    return(
        <MediaContext.Provider value ={{
            mediaWidth,
        }}>
        {children}
        </MediaContext.Provider>
    )
}