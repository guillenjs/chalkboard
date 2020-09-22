import React, { Component } from 'react'
import { DatePicker, DatePickerInput } from 'carbon-components-react';
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

    assignmentForm = () => {
        return <form>
                    <input type="text" placeholder="title"></input>
                    {/* <DatePicker dateFormat="m/d/Y" datePickerType="single">
                        <DatePickerInput
                            id="date-picker-calendar-id"
                            placeholder="mm/dd/yyyy"
                            labelText="Date picker label"
                            type="text"
                        />
                        </DatePicker> */}
                    <input type="text" placeholder="due date"></input>
                    <button className="create-btn" onClick={this.handleClick}>
                            Create New
                    </button>
              </form>
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
                
                {/* this function will render a form to create new assignemnt */}
                {this.assignmentForm()}
               
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
