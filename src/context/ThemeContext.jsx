import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    useEffect(() => {
        // Check local storage for a saved theme
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setThemeMode(savedTheme);
        } else {
            // Fallback to system preference
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setThemeMode(prefersDarkScheme ? "dark" : "light");
        }

        // Listen for changes in system theme
        const themeChangeListener = (e) => {
            if (!localStorage.getItem("theme")) {
                setThemeMode(e.matches ? "dark" : "light");
            }
        };

        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        matchMedia.addListener(themeChangeListener);

        return () => {
            matchMedia.removeListener(themeChangeListener);
        };
    }, []);

    useEffect(() => {
        // Update the html tag class
        document.querySelector('html').classList.remove('dark', 'light');
        document.querySelector('html').classList.add(themeMode);
      }, [themeMode]);

    const darkTheme = () => {
        setThemeMode("dark");
        localStorage.setItem("theme", "dark");
    };

    const lightTheme = () => {
        setThemeMode("light");
        localStorage.setItem("theme", "light");
    };

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};