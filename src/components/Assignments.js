import React, { Component } from 'react'

import AssignmentsForm from './AssignmentsForm'


export class Assignments extends Component {
    state = {
        new: false
    }

    handleClick = () => {
        this.setState ({
            new: true
        })
    }

    render() {
        console.log(this.state)
        return (
            <div >
               {this.state.new === true?
               <div>
                <AssignmentsForm /> 
                </div>:

                <div>
                <button className="create-btn" onClick={this.handleClick}>
                    Create New
                </button>
               
                <div class="assignments-container">
                    <div class="assignments">
                       
                    <div className="assignment-container">
                        Hello
                    </div>

                    <div className="assignment-container">
                        Hello
                    </div>

                    <div className="assignment-container">
                        Hello
                    </div>

                    </div>
                </div>
               
                </div>
                }
            </div>
        )
    }
}

export default Assignments
