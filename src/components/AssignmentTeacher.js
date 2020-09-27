import React, { Component } from 'react'
import TeacherAssignmentButton from './TeacherAssignmentButton'

export class AssignmentTeacher extends Component {

    renderTeacher = () => {
        let teacher = this.props.allUsers.filter( user => user.id === this.props.teacher.friend_id )
        console.log(teacher[0].assignments)
      

        return <div>
                    {teacher[0].username}
                </div>

    }

    renderButtons =() => {
        let teacher = this.props.allUsers.filter( user => user.id === this.props.teacher.friend_id )

       return teacher[0].assignments.map( assignment => <TeacherAssignmentButton  
                                                            handleCurrentAssignment = {this.props.handleCurrentAssignment} 
                                                            assignment={assignment}
                                                            assignmentArray = {this.props.assignmentArray}
                                                            user = {this.props.user}
                                                        />)
    }


   /////still not sure about this/// i think i needto create another table that references user and teacher assignments// 
    // renderButtons =() => {
    //     let teacher = this.props.allUsers.filter( user => user.id === this.props.teacher.friend_id )

    //    return teacher[0].assignments.map( assignment => <TeacherAssignmentButton  
    //                                                         handleCurrentAssignment = {this.props.handleCurrentAssignment} 
    //                                                         assignment={assignment}
    //                                                         assignmentArray = {this.props.assignmentArray}
    //                                                     />)
    // }

    

    render() {
        console.log(this.props.teacher.friend_id)
        return (
            <div>
                {this.renderTeacher()}
                {this.renderButtons()}
            </div>
        )
    }
}

export default AssignmentTeacher
