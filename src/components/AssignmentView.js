import React, { Component } from 'react'
import AssignmentViewQuestion from './AssignmentViewQuestion'

export class AssignmentView extends Component {

    // when rendering question from teacher side we can directly map through the assignment 
    // but for students we need to find in DB and then render in order to have those relationships
    renderQuestions = () => {
        // if user === teacher then render this else look for assignemnt and then render and map
        return this.props.currentAssignment.questions.map(question => <AssignmentViewQuestion key={question.id} question ={question}/>) 
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


