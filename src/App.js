import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Get this project on
        {" "}
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
        Github
        </a>{" "}
        | Hamid's work of Art {" "}
      </div>
    </React.Fragment>
  );
}

export default App;
