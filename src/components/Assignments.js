import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {withRouter} from 'react-router-dom'


export class Assignments extends Component {
    state = {
        new: false,
        title: "",
        date: new Date(),

    }

    handleClick = (e) => {
        e.preventDefault()
        
        // do a fetch request here to the backend 
        //the below state we can get ride of it and instead there will just be a 
        //redirect to to assignment form route
        fetch("http://localhost:3000//assignments", {
            method: "POST",
            headers: {
                //Create authorized fetch make sure take is a vairable
                // Authorization: `token ${token}`,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify ({
                title: this.state.title,
                date: this.state.date,
                user_id: this.props.user.id
            })
        })

        // this.setState ({
        //     new: true
        // }, () => this.props.history.push("/form"))
    }

    handleDate = e => {
        this.setState({
          date: e
        });
      };

      handleTitle = e => {
          this.setState ({
            title: e
          })
      }

    assignmentForm = () => {
        return <form>
                    <input type="text" 
                        placeholder="title" 
                        name="title" 
                        onChange ={(e)=>this.handleTitle(e.target.value)} 
                        value={this.state.title}>
                    </input>

                    <DatePicker
                        name="date"
                        selected={this.state.date}
                        value={this.state.date}
                        onChange={this.handleDate}
                    />
                  
                  
                    <button className="create-btn" onClick={this.handleClick}>
                            Create New
                    </button>
              </form>
    }


    render() {
        console.log(this.state)
        return (
            <div >
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
        )
    }
}

export default withRouter(Assignments)
