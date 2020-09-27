import React, { Component } from 'react'
import AssignmentViewQuestion from './AssignmentViewQuestion'
import {withRouter} from 'react-router-dom'

export class AssignmentView extends Component {

  state= {
      counter: 0,
      grade: 0 
  }

  handleGrade = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            grade: ((prevState.counter + 1)/(this.props.currentAssignment.questions.length))
          }));
    }
    // when rendering question from teacher side we can directly map through the assignment 
    // but for students we need to find in DB and then render in order to have those relationships
    renderQuestions = () => {
        // if user === teacher then render this else look for assignemnt and then render and map
        return this.props.currentAssignment.questions.map(question => 
                    <AssignmentViewQuestion 
                        key={question.id}
                        question ={question} 
                        handleGrade = {this.handleGrade}
                    />) 
    }

    handleComplete = () => {

        fetch("http://localhost:3000/grades", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grade: this.state.grade,
                user_id: this.props.user.id, 
                teacher_id: this.props.currentAssignment.user_id, 
                assignment_id: this.props.currentAssignment.id
            })
        })

        fetch("http://localhost:3000/assignments", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.props.currentAssignment.title,
                date: new Date().toUTCString(),
                user_id: this.props.user.id
            })
        })
            .then( res => res.json())
            .then( newAssignment => {
                this.props.updateCompleted(newAssignment)
                }
            )

    }



    render() {
        console.log(this.state.counter)
        console.log(this.state.grade)
        return (
            <div class="quiz-container">
                <div class="quiz">
                    <h3>{this.props.currentAssignment.title}</h3>
                   {this.renderQuestions()}

                   {this.props.user.teacher?
                    <button>edit</button>:
                    <button onClick={this.handleComplete}>complete</button>
                   }
                 </div>
        </div>
        )
    }
}

export default withRouter(AssignmentView)


