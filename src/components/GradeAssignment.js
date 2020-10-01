import React, { Component } from 'react'

export class GradeAssignment extends Component {
    
    render() {
        
        console.log(this.props.grade)
        console.log(this.props.assignmentArr)
        const grade = parseInt((this.props.grade.grade) * 100 )

        const assignment = this.props.assignmentArr.filter( assignment =>  assignment.id === this.props.grade.assignment_id)
        console.log(assignment)
        const title = assignment[0].title

        return (
                <>
                {this.props.user.teacher? 
                 <tr>
                    <td>{title}</td>
                    <td>{this.props.grade.user.username}</td>
                    <td>{grade.toFixed(2)}%</td>
                </tr>:
                 <tr>
                 <td>{title}</td>
                 <td>{grade.toFixed(2)}</td>
             </tr>
                }
                </>
        )
    }
}

export default GradeAssignment
