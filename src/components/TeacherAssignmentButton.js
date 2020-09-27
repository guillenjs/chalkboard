import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class TeacherAssignmentButton extends Component {

    state = {
        existing: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/users", {
            headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => res.json())
        .then(allUser => {
            console.log(allUser)
            const currentUser = allUser.filter(user => user.id === this.props.user.id)
            const titleArr = currentUser[0].assignments.map( assignment => assignment.title)
            console.log(titleArr.includes(this.props.assignment.title))

            this.setState ({
                existing: titleArr
            })
        })
    }

    renderButton = () => {
        let assignment = this.props.assignmentArray.filter( assignment =>  assignment.id === this.props.assignment.id)

        if (this.state.existing.includes(this.props.assignment.title))
            {
                return  <button >
                             Done
                         </button> 
            }
        else {
                return <NavLink to='/assignmetview'>
                            <button onClick={()=>this.props.handleCurrentAssignment(assignment[0])} >
                                {this.props.assignment.title}
                            </button>   
                        </NavLink>
        }
    }
 
    render() {
        // console.log(assignment[0])

        return (
            <div>
               {this.renderButton()}
            </div>
        )
    }
}

export default TeacherAssignmentButton
