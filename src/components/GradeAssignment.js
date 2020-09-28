import React, { Component } from 'react'

export class GradeAssignment extends Component {
    render() {
        console.log(this.props.grade)
        return (
            <div>
                <h4>{this.props.grade.title} Grade:{this.props.grade.grade}</h4>
            </div>
        )
    }
}

export default GradeAssignment
