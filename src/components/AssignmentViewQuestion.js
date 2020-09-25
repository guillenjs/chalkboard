import React, { Component } from 'react'

export class AssignmentViewQuestion extends Component {
    state = {
        answer: ""
    }

    handeClick = (e) => {
        console.log(e.target.value)
        this.setState ({
            answer: e.target.value
        })
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
        console.log(this.props.question)
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
