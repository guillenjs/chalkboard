import React from 'react'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {

  state = {
      username: "",
      password: "",
      teacher: ""
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
     e.preventDefault()

     fetch("http://localhost:3000/login", {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(this.state)
         })
            .then(res => res.json())
            .then(data => {
                //this will set the users token into local storage 
                //It can be used for fetch in other areas
                localStorage.setItem('token', data.token)
                this.props.login(data.user)
                
            })
  }

    render() {
        console.log(this.state)
    return (
        <div>
            <div className="login-container">
                 <div className="login">
                     <img src="chalkboardlogo.png" className="login-logo" alt="chalkboard login logo"/>
                        <br></br>
                   
                        <div>

                     <form className = "login-form" onSubmit={this.handleSubmit}>

                            <input 
                                type="text" 
                                placeholder="username" 
                                name='username'
                                className = "userName" 
                                value={this.state.username}
                                onChange = {this.handleChange}
                            />

                                <br></br>
                            <input 
                                type="password" 
                                placeholder="password" 
                                name="password"
                                className = "userName"
                                value={this.state.password}
                                onChange = {this.handleChange}
                            />
                                <br></br>


                            <button 
                                className ="sign-in" 
                                >
                                    Sign In
                            </button>
                     </form>
                     <br></br>

                     <img 
                        src="pencil_login.png" 
                        className="login-pencil" 
                        alt="graphics for login area"
                    />
                        
                        {/* this link is what will be use for to new user form */}
                        <NavLink to="/signup">sign-up</NavLink>
                  
                    </div>
                 </div>
            </div>
        </div>
    )
    }
}

export default Login
