import React from 'react';
import './App.css';
import { Link } from '../Link/Link';

function App() {
  return (
    <div>

      <div className="App_nav">

        <a className="App_icon" href="https://music.youtube.com/">
          <img src="https://music.youtube.com/img/on_platform_logo_dark.svg"></img>
        </a>

        <nav className="App_link">
          <Link
            text="Home"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Explore"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Library"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Search"
            url="https://www.youtube.com/"
            active />

        </nav>

        <div className="App_user"></div>

      </div>

      <div className="App_fav">
        <p className="App_title">Your favorites</p>
        <div>

        </div>
      </div>


    </div>

  );
}

export default App;
