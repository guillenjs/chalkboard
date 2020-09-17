import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Assignments from './components/Assignments'
import Schedule from './components/Schedule'
import Grades from './components/Grades'
import Contact from './components/Contact'




function App() {
  return (
    
    <div className="App">
      {/* <header>chalkboard</header> */}
      <div>
      <NavBar/>
      </div>
      <div className="grid-container">
        <div className="main">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/assignments" exact>
                <Assignments />
              </Route>

              <Route path="/schedule" exact>
                <Schedule />
              </Route>

              <Route path="/grades" exact>
                <Grades />
              </Route>

              <Route path="/contact" exact>
                <Contact />
              </Route>

            </Switch>
            

        </div>
      </div>
    </div>
  );
}


export default App;
