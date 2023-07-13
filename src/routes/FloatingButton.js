import React from 'react';
import { useThemeStore } from '../stores/useThemeStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const FloatingButton = () => {
  const { theme, invertTheme } = useThemeStore();
  document.body.classList.toggle('dark', theme === 'dark');
  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-gray-700 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-white text-white dark:text-black font-bold w-[50px] h-[50px] rounded-full "
        onClick={invertTheme}
      >
        {
          theme === 'dark'?
          <FontAwesomeIcon icon={faSun} size={'lg'}/>
          :
          <FontAwesomeIcon icon={faMoon}  size={'lg'}/>
        }
      </button>
    </div>
  );
};
export default FloatingButton;
