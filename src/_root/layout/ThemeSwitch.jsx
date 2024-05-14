import useTheme from "../../context/ThemeContext";

export const ThemeSwitch = () => {

    const { themeMode, lightTheme, darkTheme } = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <div className="theme-toggle">
            <input type="checkbox" id="toggle" className="toggle--checkbox" checked={themeMode === 'dark'} onChange={onChangeBtn} />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
        </div>

    );
};