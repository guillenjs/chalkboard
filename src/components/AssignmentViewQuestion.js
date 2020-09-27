import React, { Component } from 'react'

export class AssignmentViewQuestion extends Component {
    state = {
        answer: ""
    }

    handeClick = (e) => {
      
        this.setState ({
            answer: e.target.value
        })
      
        if (e.target.value === this.props.question.answer)
        {
            this.props.handleGrade()
        }

    }

    handleAnswer = () => {
        // if(this.state.answer === this.props.question.answer)
        //     {
        //         this.props.handleGrade("hello")
        //     }

        
    }

    renderButtons =()=> {
        if (this.state.answer === ""){
           return <div>
                <button className="option-btn"  value={this.props.question.options1} onClick={this.handeClick}>{this.props.question.options1}</button>
                <button className="option-btn"  value={this.props.question.options2} onClick={this.handeClick}>{this.props.question.options2}</button>
                <button className="option-btn"  value={this.props.question.options3} onClick={this.handeClick}>{this.props.question.options3}</button>
                <button className="option-btn"  value={this.props.question.options4} onClick={this.handeClick}>{this.props.question.options4}</button>
            </div>
        }
        else {
            return <div>
                <button className="option-btn">{this.state.answer}</button>
            </div>
        }
    }


    render() {
        console.log(this.state.answer)
        console.log(this.props.question.answer)
        return (
            <div>
                <div>
                     <b>{this.props.question.question}</b>
                            {this.renderButtons()}
                </div>
            </div>
        )
    }
}

export default AssignmentViewQuestion
