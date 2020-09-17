import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
// import { Spin as Hamburger } from 'hamburger-react'


function NavBar(props) {

const [showNav, setShowNav] = useState(false)

const renderNavBar = () => {
    setShowNav( !showNav)
}

console.log(showNav)
    return (
        
        <div className='topnav'>
            {showNav?
                 <i className="fa fa-times" onClick={renderNavBar}></i>: 
                <i className="fa fa-bars" onClick={renderNavBar}></i>
            }
           

            <NavLink to="/login" className="logout">Logout</NavLink>
            {showNav? 
                <div className="links">
                    <ul className="menuList">
                    <li><NavLink className="menu-link" to="/home">Home</NavLink><i class="fas fa-chalkboard"></i></li>
                        <li><NavLink className="menu-link" to="assignments">Assignments</NavLink></li>
                        <li><NavLink className="menu-link" to="schedule">Schedule</NavLink></li>
                        <li><NavLink className="menu-link" to="grades">Student/Grades</NavLink></li>
                        <li><NavLink className="menu-link" to="contact">Contact</NavLink></li>
                    </ul>
                </div> : ""
            }
        </div>
    )
}

export default NavBar
