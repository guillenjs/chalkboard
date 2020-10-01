import React, { Component } from 'react'

export class HomeTeacherRoster extends Component {

    renderEmoji = () => {
        
        const emojiArr = ["👨🏽‍💻","👨🏽‍🔬","🤦🏻‍♀️","🤦🏽","👨🏽‍🎨","🤡",
                            "🥴","🤦🏻‍♀️","😄","😎","👽","😈","🤖",
                            "😇","😜","😒","😏","🙃","🙂","🧐",
                            "🤯","🤓","🎃","👻","😸","😺","👩🏽‍🎤","👩🏻‍🎨"]

        const random = Math.floor(Math.random() * emojiArr.length);
        return emojiArr[random]
    }



    render() {
        console.log(this.renderEmoji())
        return (
            <tr>
                <td>{this.props.student.username}</td>   
                <td>{this.renderEmoji()}</td>                 
            </tr>
        )
    }
}

export default HomeTeacherRoster
