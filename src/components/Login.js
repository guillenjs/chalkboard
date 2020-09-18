import React from 'react'
import { NavLink } from 'react-router-dom'

function Login(props) {
  
    return (
        <div>
            <div class="login-container">
                 <div class="login">
                     <img src="chalkboardlogo.png" className="login-logo" alt="chalkboard login logo"/>
                        <br></br>
                        login
                        <div>

                     <form className = "login-form">
                            <input type="email" placeholder="email" className = "userName"/>
                                <br></br>
                            <input type="password" placeholder="password" className = "userName"/>
                                <br></br>
                            <button className ="sign-in" onClick={props.login}>Sign In</button>
                     </form>
                     <br></br>

                     <img src="pencil_login.png" className="login-pencil" alt="graphics for login area"/>
                        
                        {/* this link is what will be use for to new user form */}
                        <NavLink to="/signup">sign-up</NavLink>
                  
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Login
