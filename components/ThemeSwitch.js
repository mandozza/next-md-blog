import { stringify } from "gray-matter";
import { useState } from "react";
import DarkTheme from "./DarkTheme";

export default function ThemeSwitch() {
  //Check if darkMode is in local Storage
  // JSON.parse is used to convert the string to an boolean.
  function loadDarkMode(){
    // check if it's on the server or the browser.
    if(typeof localStorage === 'undefined'){
      return false;
    }
    const value = localStorage.getItem('darkMode');
    return (value === null) ? false : JSON.parse(value);
  }


  // set the initial theme to light using useState.
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  // handle theme selection.
  // JSON stringify is used to change a booleen to a string for the darkMode state to be stored in the localStorage.
  const handleThemeSwitch = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }
// handle button text.
  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  return (
		<>
			<button onClick={handleThemeSwitch}>{text}</button>
			<style jsx>{`
				button {
					background: none;
					border: none;
					cursor: pointer;
					color: inherit;
				}
			`}</style>
      {darkMode && <DarkTheme/>}
		</>
  );
}
