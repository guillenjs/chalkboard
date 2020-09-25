import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class TeacherAssignmentButton extends Component {
 
    render() {
        let assignment = this.props.assignmentArray.filter( assignment =>  assignment.id === this.props.assignment.id)
        // console.log(assignment[0])

        return (
            <div>
                <NavLink to='/assignmetview'>
                     <button  
                        onClick={()=>this.props.handleCurrentAssignment(assignment[0])}
                    >
                            {this.props.assignment.title}
                         </button>   
                </NavLink>
            </div>
        )
    }
}

export default TeacherAssignmentButton
