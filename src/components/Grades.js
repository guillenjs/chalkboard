import React, { Component } from 'react'
import GradeAssignment from './GradeAssignment'

export class Grades extends Component {

    // state = {
    //     grades: []
    // }

    // componentDidMount() {
    //     fetch("http://localhost:3000/grades",{
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     )
    //     .then(res => res.json())
    //     .then(gradesArr => {
    //         if(this.props.user.teacher === false){
    //             let currentGrades = gradesArr.filter( grade => grade.user.id === this.props.user.id)
    //             console.log(currentGrades)

    //             this.setState({
    //                 grades: currentGrades
    //             })
    //          }
    //          else {
    //              let currentGrades = gradesArr.filter( grade => grade.teacher_id  === this.props.user.id)
    //              this.setState({
    //                  grades: currentGrades
    //              })
    //          }
           
    //     })
    // }

    renderGrades = () => {
        const grades = this.props.grades.map( single => single.grade * 100)
        console.log(grades)

        const sum = grades.reduce((accumulator, currenValue ) => {
            return accumulator + currenValue;
        }, 0)
        
        console.log(sum)
        
        const average = (sum / this.props.grades.length) 
  
     
                return <div><h2>{average.toFixed(2)}%</h2>  </div>
            
             
    }

    renderAssignmentGrades = () => {
      
       return this.props.grades.map( eachGrade => <GradeAssignment  key={eachGrade.id} grade ={eachGrade} user={this.props.user} assignmentArr = {this.props.assignmentArr}/> )
      
    }

    render() {
       console.log(this.props.grades)
        return (
            <div>
                <h1>Grades</h1>

                <div className="grade-container">
                    <div className="average">
                     
                     <div i>
                     <table id="average-table"> 
                     {this.props.user.teacher?
                        <th>Class Average</th>:
                        <th>Average</th>
                    }
                     <tr>{this.renderGrades()} </tr>
                     </table>
                     </div>
                      <br></br>
                    <div className = 'grade-key'>
                      A = 92 - 100
                       B = 86 - 92
                       C = 70 - 86
                       D = 66 - 70
                       F = 0 - 65
                       
                    </div>    

                    </div>
                    <div className="list-grades">
                        <table id="customers">
                            {this.props.user.teacher? 
                            <tr>
                                <th>Assigment</th>
                                <th>Student</th>
                                <th>Grade</th>
                            </tr>:
                            <tr>
                                <th>Assigment</th>
                                <th>Grade</th>
                            
                            </tr>
                            }
                                {/* <td>Alfreds Futterkiste</td>
                                <td>98</td> */}
                                {this.renderAssignmentGrades()}
                         

                            </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Grades
