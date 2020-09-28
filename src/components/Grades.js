import React, { Component } from 'react'
import GradeAssignment from './GradeAssignment'

export class Grades extends Component {

    state = {
        grades: [],
        // averageGrade: 0
    }

    componentDidMount() {
        fetch("http://localhost:3000/grades",{
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then(res => res.json())
        .then(gradesArr => {
            let currentGrades = gradesArr.filter( grade => grade.user.id === this.props.user.id)
            console.log(currentGrades)

            this.setState({
                grades: currentGrades
            })
           
        })
    }

    renderGrades = () => {
        const grades = this.state.grades.map( grade => grade.grade)
        
        const sum = grades.reduce((accumulator, currenValue ) => {
            return accumulator + currenValue;
        }, 0)
        
        const average = (sum / this.state.grades.length) * 100
             return <div><h1>{average}</h1>  </div>
    }

    renderAssignmentGrades = () => {
       return this.state.grades.map( eachGrade => <GradeAssignment  key={eachGrade.id} grade ={eachGrade} /> )
    }

    render() {
       console.log(this.state.grades)
        return (
            <div>
                <h1>Grades</h1>

                <div className="grade-container">
                    <div className="average">
                      {this.renderGrades()}
                    </div>
                    <div className="list-grades">
                        {this.renderAssignmentGrades()}
                    </div>
                </div>

            </div>
        )
    }
}

export default Grades
