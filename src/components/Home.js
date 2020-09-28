import React, { Component } from 'react'
import HomeTeacher from './HomeTeacher'

export class Home extends Component {
    state = {
        teachers:[]
    }

    // componentDidMount() {

    //     fetch("http://localhost:3000/users",{
    //             headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //             }
    //         }
    //     )
    //         .then(res => res.json())
    //         .then(userArr => {
    //             let teacherArr = userArr.filter( user => user.teacher === true)
    //             console.log(teacherArr)
    //             this.setState({
    //                 teachers: teacherArr
    //             })
               
    //         })

    //         fetch("http://localhost:3000/users",{
    //                 headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`
    //                 }
    //              }
    //          )
    //          .then(res => res.json())
    //          .then(users => {
    //             let user = users.filter(individualUser => individualUser.id === this.props.user.id)
    //                 user[0].friendships.map( teacher => this.props.handleAddTeacher(teacher))
    //       
    //          })
    // }



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
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>

                    <div className="assignments">
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
