import React, { Component } from 'react'
import AssignmentViewQuestion from './AssignmentViewQuestion'

export class AssignmentView extends Component {
    renderQuestions = () => {
        return this.props.currentAssignment.questions.map(question => <AssignmentViewQuestion question ={question}/>) 
    }

    render() {
        console.log(this.props.currentAssignment.questions.map(question => question.question))
        return (
            <div class="quiz-container">
                <div class="quiz">
                    <h3>{this.props.currentAssignment.title}</h3>
                   {this.renderQuestions()}
                 </div>
        </div>
        )
    }
}

export default AssignmentView


