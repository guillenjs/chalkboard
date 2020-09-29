import React, { Component } from 'react'
import AssigmentQuestion from './AssigmentQuestion'

export class AssignmentsForm extends Component {

    state = {
        questions: [<AssigmentQuestion currentAssignment={this.props.currentAssignment}/>]
    }

    renderQuestion = () => {
        let newQuestion = [...this.state.questions, <AssigmentQuestion currentAssignment={this.props.currentAssignment}/>]

        this.setState({
            questions: newQuestion 
        })
    }

    
    render() {

        return (
            
            <div className="quiz-question">
                {this.state.questions}
                <button onClick={this.renderQuestion}>Add question</button>
            </div>
        )
    }
}

export default AssignmentsForm
