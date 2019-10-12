import React from 'react';
import './App.css';
import PlayerBox from './components/PlayerBox';
import { useDarkMode } from './utils/darkmode';

function App(){
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  };

  return (
     <div className={darkMode ? 'backGround blue': 'backGround'} id="back">
      <button onClick={toggleMode}>Change Mode</button>
      <h1>Soccer Player Cards</h1>
      <PlayerBox />
    </div>
  )
};

export default App;
