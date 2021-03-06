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
      usersTeachers: [],
      allTeachers: [],
      allUsers: [],
      assignmentArr: [],
      grades: []
    }

  toggleLogin = (user) => {
    this.setState({
      user: user
    })
  }


  //NEW FETCH FOR ASSIGNMENTS

  componentDidMount() {
    fetch("http://localhost:3000//assignments", {
            headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`,} 
        }
    )
    .then(res => res.json())
    .then(assignmentArr => {
        this.setState({
            assignmentArr: assignmentArr
        })
    })


    fetch("http://localhost:3000/users",{
      headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  }
)
  .then(res => res.json())
  .then(userArr => {

    let teacherArr = userArr.filter( user => user.teacher === true)

      this.setState ({
        allUsers: userArr,
        allTeachers: teacherArr
      })
  })


  fetch("http://localhost:3000/grades",{
    headers: {
        'Content-Type': 'application/json'
    }
}
)
.then(res => res.json())
.then(gradesArr => {this.setState({ grades: gradesArr})
})
}
  

  handleCurrentAssignment = (current) => {
    const newArr = [...this.state.assignmentArr, current]

    this.setState ({
      currentAssignment: current,
      assignmentArr: newArr
    })
   
  }

  handleUsersTeachers = (user) => {

    this.setState ({
      usersTeachers: user
    })
  }

  handleAddTeacher = (newTeacher) => {
    console.log(newTeacher)

    const updateArr = [...this.state.usersTeachers, newTeacher]
    this.setState ({
      usersTeachers:updateArr
    })

    // this.setState({
    //   usersTeachers: updateArr
    // });
  }



  //this will updated Assignment Array in state by removing the assignment that was just completed specifically 
  //when on the student side but can be rused on teacher side as well, in order to delete assignment// edit assignment.
updateCompleted = (completed) => {
  console.log(completed)
  const newAssignmentArr = this.state.assignmentArr.filter( assignment => assignment !== this.state.currentAssignment)
  
  this.setState({
    assignmentArr: newAssignmentArr
  })
  this.props.history.push("/assignments")
}

updateGrades = (grade) => {
  console.log(grade)
  const updateArr = [...this.state.grades, grade]
  console.log(updateArr)
  this.setState({grades: updateArr})
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
                        usersTeachers = {this.state.usersTeachers}
                        allUser = {this.state.allUsers}
                        allTeachers = {this.state.allTeachers}
                        handleUsersTeachers = {this.handleUsersTeachers}
                        handleAddTeacher = {this.handleAddTeacher}
                        handleAllUsers = {this.handleAllUsers}
                        assignments = {this.state.assignmentArr}

                       
                      />
                    </Route>

                    <Route path="/assignments" exact>
                      <Assignments 
                        user={this.state.user}
                        usersTeachers = {this.state.usersTeachers}
                        usersTeachersTwo = {this.usersTeachers}
                        allUsers = {this.state.allUsers}
                        handleCurrentAssignment = {this.handleCurrentAssignment}
                        assignmentArr = {this.state.assignmentArr}

                        handleAddTeacher = {this.handleAddTeacher}
                      />
                    </Route>

                    <Route path="/schedule" exact>
                      <Schedule user ={this.state.user} allTeachers = {this.state.allTeachers} assignments = {this.state.assignmentArr} />
                    </Route>

                    <Route path="/grades" exact>
                      <Grades 
                        user = {this.state.user}
                        assignmentArr = {this.state.assignmentArr}
                        grades = {this.state.grades}
                      />
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
                        user = {this.state.user}
                        assignmentArr = {this.state.assignmentArr}
                        updateCompleted = {this.updateCompleted}
                        updateGrades = {this.updateGrades}
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
