import React, { Component } from 'react'
import HomeTeacher from './HomeTeacher'
import HomeTime from './HomeTime'
import HomeUsersTeachers from './HomeUsersTeachers'
import HomeFieldTrip from './HomeFieldTrip'
import HomeTeacherRoster from './HomeTeacherRoster'

//fix the rendering of teacher after classroom is added

export class Home extends Component {
    state = {
        teachers:[],
        currentUser: this.props.allUser.filter(user => user.id === this.props.user.id)

    }

    renderTeacher= () => {
        return <HomeTeacher 
                handleTeacherAdd={this.handleTeacherAdd}
            />
    }


 componentDidMount() {


    fetch("http://localhost:3000/users",{
      headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  }
)
  .then(res => res.json())
  .then(userArr => {
         this.state.currentUser[0].friendships.map( friendship => {
             const teacher = userArr.filter( t => t.id === friendship.friend_id)
            this.props.handleAddTeacher(teacher[0])
         })
    
   })

  

 }   


    renderUsersTeachers = () => {
        console.log(this.state.currentUser[0].friendships)
     
      return this.props.usersTeachers.map( friendship => 
            <HomeUsersTeachers 
                friendship = {friendship} 
                teachers ={this.props.allTeachers}
                usersTeachers = {this.props.usersTeachers}
        />)
     
    }


    handleTeacherAdd = (classroom) => {
        console.log(classroom)
        fetch("http://localhost:3000//friendships",{
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user.id, 
                friend_id: classroom
            })
        }
        )
            .then(res => res.json())
            .then(newFriend => {
                const friendship = this.props.allUser.filter( user => user.id === newFriend.friend_id)
                this.props.handleAddTeacher(friendship[0])
            })
    }

    renderTeachersStudetns = () => {
        const students = this.props.allUser.filter( user => user.teacher !== true )
       
        return students.map( student => <HomeTeacherRoster student ={student}/> ) 
    }

    render() {
       
        return (
            <div>

                <div className="home-grid">
                    
                    <div className="date">
                         <HomeFieldTrip />
                    </div>

                    <div className="assignmentshome">
                        <HomeTime assignments = {this.props.assignments} />  
                    </div>

                    <div className="current">
                        {this.props.user.teacher?

                        <div>
                            <table id="student-roster">
                                <tr>
                                    <th>Student Roster</th>
                                    <th>ID</th>
                                </tr>
                                {this.renderTeachersStudetns()}
                            </table>
                            
                        </div>:

                        <div className="current-container">
                      

                            <div className="add-classroom"> 
                                {this.renderTeacher()}
                            </div>
                            <div className="current-teachers">
                                <table id="teacher-table">
                                    <tr>
                                        <th>Teachers</th>
                                        <th>remove</th>
                                    </tr>
                                    {this.renderUsersTeachers()}
                                </table>
                            </div>
                        </div>
                    }

                    </div>

            </div>

            </div>
        )
    }
}

export default Home
