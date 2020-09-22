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
import Signup from './components/Signup'
import AssignmentsForm from './components/AssignmentsForm';




class App extends React.Component {
    state ={
      user: null,
      currentAssignment:[]
    }

  toggleLogin = (user) => {
    this.setState({
      user: user
    })
  }

  //do a fetch through a lifecycle method do get each assignment

  

  handleCurrentAssignment = (currentAssignment) => {
    console.log(currentAssignment)
    //spread current assignemnt to existing array of objects
  }

 

render() {
  
  console.log(this.state.user)
  return (
    
    <div className="App">

 { this.state.user == null?

    <div>
      
      <Switch>

        <Route path="/" exact>
           <Login login = {this.toggleLogin} user={this.state.user}/>
        </Route>
        ]
        <Route path = "/signup" exact>
          <Signup />
        </Route>

      </Switch>
     
     </div>:
    

      <div>
          <header>
            <div className="container">
             <img src="chalkboard.png" alt="chalkboard logo"/>
         </div>
    </header>
          <div>
             <NavBar login = {this.toggleLogin} user={this.state.user} />
            </div>

            <div className="grid-container">
              <div className="main">
                  <Switch>
                    <Route path="/" exact>
                      <Home 
                        user={this.state.user}
                      />
                    </Route>

                    <Route path="/assignments" exact>
                      <Assignments 
                        user={this.state.user}
                        handleCurrentAssignment = {this.handleCurrentAssignment}
                      />
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

                    <Route path="/form" exact>
                      <AssignmentsForm />
                    </Route>

                  </Switch>
              </div>
            </div>
        </div>
}



       {/* {this.renderApp()} */}
    </div>
  );
}
}


export default App;
