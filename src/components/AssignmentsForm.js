import React, { Component } from 'react'
import AssigmentQuestion from './AssigmentQuestion'

export class AssignmentsForm extends Component {

    state = {
        questions: [<AssigmentQuestion />]
    }

    renderQuestion = () => {
        let newQuestion = [...this.state.questions, <AssigmentQuestion />]

        this.setState({
            questions: newQuestion 
        })
    }
    
    render() {

        return (
            
            <div>
                {this.state.questions}
                <button onClick={this.renderQuestion}>Add question</button>
            </div>
        )
    }
}

export default AssignmentsForm
