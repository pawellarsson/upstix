import { useTheme } from '../context/themeProvider';

const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className="toggle-wrapper">
      <label>Toggle theme</label>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
        className="inputBox"
      />
    </div>
  );
};

export default ToggleTheme;
