import React, { Component } from 'react'

export class AssigmentQuestion extends Component {
    state = {
        question: "",
        options1: "",
        options2: "",
        options3: "",
        options4: "",
        answer: "",
        assignment_id: this.props.currentAssignment.id
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSave = (e) => {
        e.preventDefault()

        //This array will be used for options which in the backend will be an array of strings
        let optionsArr = [this.state.options1, this.state.options2, this.state.options3, this.state.options4]
        console.log(optionsArr)

       //each time a save is clicked it will post fetch on backend for each question
       // each question needs state and also a key related to current form which can be aquired from props in APP
       fetch("http://localhost:3000/questions", {
           method: "Post",
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
           },
           body: JSON.stringify (
                  this.state
           )
       })
        .then(res => res.json())
        .then(newQuestions => console.log(newQuestions))
    }

    render() {
       
        return (
            <div>
                <form onSubmit={this.handleSave}>
                    <label>Question:
                        <input 
                            type='text' 
                            name="question" 
                            value={this.state.question} 
                            onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>Option 1:
                        <input 
                            type='text' 
                            name="options1" 
                            value={this.state.options1} 
                            onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>Option 2:
                        <input 
                            type='text' 
                            name="options2" 
                            value={this.state.options2} 
                            onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>Option 3:
                        <input 
                            type='text' 
                            name="options3" 
                            value={this.state.options3} 
                            onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>Option 4:
                        <input 
                            type='text' 
                            name="options4"
                             value={this.state.options4} 
                             onChange={this.handleChange}>
                        </input>
                    </label>

                    <label>Answer:
                        <input 
                            type='text' 
                            name="answer" 
                            value={this.state.answer} 
                            onChange={this.handleChange}>
                        </input>
                    </label>
                    
                    <button>save</button>       
                </form>
            </div>
        )
    }
}

export default AssigmentQuestion
