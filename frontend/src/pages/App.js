import React, { useState, useEffect } from "react";
import logo from '../logo.png';
import '../styling/App.css';
function App() {
  const [data, setdata] = useState({
    name: "",
    phrase: ""
  });
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                name: data.Name,
                phrase: data.Phrase
            });
        })
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>{data.name}</p>
                <p>{data.phrase}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacto
        </a>
      </header>
    </div>
  );
}

export default App;