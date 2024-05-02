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
        <div className="theme-toggle fixed top-20">
            <input type="checkbox" id="toggle" class="toggle--checkbox" value="" checked={themeMode === 'dark'} onChange={onChangeBtn} />
            <label for="toggle" class="toggle--label">
                <span class="toggle--label-background"></span>
            </label>
            <div class="background"></div>
        </div>

    );
};