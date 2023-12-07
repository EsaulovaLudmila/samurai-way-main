import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://w7.pngwing.com/pngs/552/968/png-transparent-owl-bird-beak-pueo-mid-pacific-institute-owl-animals-class-logo.png"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://mykaleidoscope.ru/uploads/posts/2022-06/1656067874_66-mykaleidoscope-ru-p-tsveti-na-polu-krasivo-foto-77.jpg"
            alt=""
          />
        </div>
        <div> ava + discription</div>
        <div>
          My post
          <div>New posts</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
