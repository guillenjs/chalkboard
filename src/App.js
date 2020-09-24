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
import AssignmentView from './components/AssignmentView'

import {withRouter} from 'react-router-dom'




class App extends React.Component {
    state ={
      user: null,
      currentAssignment:{},
      usersTeachers: []
    }

  toggleLogin = (user) => {
    this.setState({
      user: user
    })
  }

  

  handleCurrentAssignment = (current) => {
    this.setState ({
      currentAssignment: current
    })
  }

  handleUsersTeachers = (user) => {
    let updatedTeachers = [...this.state.usersTeachers, user ]
    this.setState ({
      usersTeachers: updatedTeachers
    })
  }




render() {

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
                        handleUsersTeachers = {this.handleUsersTeachers}
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
                      <AssignmentsForm currentAssignment={this.state.currentAssignment}/>
                    </Route>

                    <Route path="/assignmetview" exact>
                      <AssignmentView 
                        currentAssignment = {this.state.currentAssignment}
                      />
                    </Route>

                  </Switch>
              </div>
            </div>
        </div>
}



       
    </div>
  );
}
}


export default withRouter(App);
