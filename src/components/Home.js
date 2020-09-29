import React, { Component } from 'react'
import HomeTeacher from './HomeTeacher'
import HomeTime from './HomeTime'


export class Home extends Component {
    state = {
        teachers:[]
    }

    renderTeacher= () => {
        return this.props.allTeachers.map(teacher => 
            <HomeTeacher 
                key = {teacher.id}
                teacher={teacher} 
                handleTeacherAdd={this.handleTeacherAdd}
                
            />)
    }

    handleTeacherAdd = (e) => {
        console.log(e.target.value)
        fetch("http://localhost:3000//friendships",{
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user.id, 
                friend_id: e.target.value
            })
        }
        )
            .then(res => res.json())
            .then(newFriend => {
                this.props.handleAddTeacher(newFriend)
            })
    }

    


    render() {
        console.log(this.state)
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
                        {this.renderTeacher()}
                    </div>

            </div>

            </div>
        )
    }
}

export default Home
