import React, { Component } from 'react'

export class AssigmentQuestion extends Component {
    state = {
        question: "",
        options1: "",
        options2: "",
        options3: "",
        options4: "",
        answer: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <label>Question:
                        <input type='text' name="question" value={this.state.question} onChange={this.handleChange}></input>
                    </label>

                    <label>Option 1:
                        <input type='text' name="options1" value={this.state.options1} onChange={this.handleChange}></input>
                    </label>

                    <label>Option 2:
                        <input type='text' name="options2" value={this.state.options2} onChange={this.handleChange}></input>
                    </label>

                    <label>Option 3:
                        <input type='text' name="options3" value={this.state.options3} onChange={this.handleChange}></input>
                    </label>

                    <label>Option 4:
                        <input type='text' name="options4" value={this.state.options4} onChange={this.handleChange}></input>
                    </label>

                    <label>Answer:
                        <input type='text' name="answer" value={this.state.answer} onChange={this.handleChange}></input>
                    </label>
                    
                    <button>save</button>       
                </form>
            </div>
        )
    }
}

export default AssigmentQuestion
