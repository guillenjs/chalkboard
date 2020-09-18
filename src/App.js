import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Assignments from './components/Assignments'
import Schedule from './components/Schedule'
import Grades from './components/Grades'
import Contact from './components/Contact'
import Login from './components/Login'




class App extends React.Component {
    state ={
      login: false,
    }

  toggleLogin = () => {
    this.setState({
      login: !this.state.login
    })
  }

renderApp = () => {
  if (this.state.login === false) {
    return <Login login = {this.toggleLogin}/>
  }
  else {
    
  return <div>
          <header>
            <div class="container">
             <img src="chalkboard.png" alt="chalkboard logo"/>
         </div>
    </header>
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
    }
}    

render() {
  console.log(this.state.login)
  return (
    
    <div className="App">
       {this.renderApp()}
    </div>
  );
}
}


export default App;
