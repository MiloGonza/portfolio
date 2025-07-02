"use client";

import { createContext, useContext, useState } from "react";

type ScrollContextType = {
    scrollYValue: number;
    setScrollYValue: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: ScrollContextType = {
    scrollYValue: 0,
    setScrollYValue: () => {},
}

const ScrollContext = createContext<ScrollContextType>(defaultValue);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {

    const [scrollYValue, setScrollYValue] = useState(0);

    return (
        <ScrollContext.Provider value={{ scrollYValue, setScrollYValue }}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScrollContext = () => useContext(ScrollContext);