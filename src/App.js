import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>chalkboard</header>
      <div>
      <NavBar/>
      </div>
      <div className="grid-container">
        <div className="main">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}


export default App;
