import React, { Component } from 'react'

export class GradeAssignment extends Component {
    render() {
        
        console.log(this.props.grade)
        const grade = (this.props.grade.grade) * 100 
        const assignment = this.props.assignmentArr.filter( assignment =>  assignment.id === this.props.grade.assignment_id)
        const title = assignment[0].title

        return (
                 <tr>
                    <td>{title}</td>
                    <td>{grade.toFixed(2)}</td>
                </tr>
        )
    }
}

export default GradeAssignment
