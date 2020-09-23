import React, { Component } from 'react'

export class AssignmentViewQuestion extends Component {
    render() {
        console.log(this.props.question)
        return (
            <div>
                <p>
                     <b>{this.props.question.question}</b>
                     <div>
                         <button>{this.props.question.options1}</button>
                         <button>{this.props.question.options2}</button>
                         <button>{this.props.question.options3}</button>
                         <button>{this.props.question.options4}</button>
                     </div>
                </p>
            </div>
        )
    }
}

export default AssignmentViewQuestion
