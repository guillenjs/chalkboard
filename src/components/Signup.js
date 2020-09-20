import React, { Component } from 'react'

export class Signup extends Component {

    state = {
        username: "",
        password: "",
        age: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        } 
        )
        .then(res => res.json())
        .then(newUser => console.log(newUser))
    }
    

    render() {
        console.log(this.state)

        return (
            <div>
                <div className="login-container">
                 <div className="login">
                 <img src="chalkboardlogo.png" className="login-logo" alt="chalkboard login logo"/>
                        <br></br>
                        Sign-up

                <form onSubmit={this.handleSubmit}>
                    <label> 
                        <input 
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        className = "userName" 
                        value={this.state.username}
                        onChange={this.handleChange}/>
                    </label>
                    <br></br>

                    <label>
                        <input 
                        type="pasword" 
                        name="password" 
                        placeholder="password" 
                        className = "userName" 
                        value={this.state.password}
                        onChange={this.handleChange}/>
                        
                    </label>
                    <br></br>

                    <label>
                        <input 
                        type="text"
                         name="age" 
                         placeholder="age" 
                         className = "userName" 
                         value={this.state.age}
                         onChange={this.handleChange}/>
                    </label>
                    <br></br>

                    <button className="sign-in">Sign-Up</button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Signup
