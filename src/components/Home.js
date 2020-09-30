import React, { Component } from 'react'
import HomeTeacher from './HomeTeacher'
import HomeTime from './HomeTime'
import HomeUsersTeachers from './HomeUsersTeachers'


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
            console.log(teacher)
            this.props.handleAddTeacher(teacher[0])
         })
    
   })

  

 }   


    renderUsersTeachers = () => {
        console.log(this.state.currentUser[0].friendships)
        // teacher = props.teachers.filter( t => t.id === props.friendship.friend_id)

        // this.props.allTeachers.filter( t => t.id)


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




    render() {
       
        return (
            <div>

                <div className="home-grid">
                    
                    <div className="date">
                        <HomeTime />
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        
                    </div>

                    <div className="assignmentshome">
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>

                    <div className="current">
                        {/* right now this will be used to render each teacher in order to be added */}
                        <div className="current-container">
                            <div className="add-classroom"> 
                                {this.renderTeacher()}
                            </div>
                            <div className="current-teachers">
                                {this.renderUsersTeachers()}
                            </div>
                        </div>
                       

                    </div>

            </div>

            </div>
        )
    }
}

export default Home
