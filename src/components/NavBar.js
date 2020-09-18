import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
// import { Spin as Hamburger } from 'hamburger-react'


function NavBar(props) {

const [showNav, setShowNav] = useState(false)

//toggles state in order to render side menu from hamburger menu
const renderNavBar = () => {
    setShowNav( !showNav)
}

console.log(showNav)
    return (
        
        <div className='topnav'>
            {showNav?

                <button className="list-btn">
                    <i className="fa fa-times" onClick={renderNavBar}></i>
                </button> : 

                <button className="list-btn">
                    <i className="fa fa-bars" onClick={renderNavBar}></i>
                    </button>
            }

            <NavLink to="/login" className="logout"><button className="logout-btn" onClick={props.login}>Logout</button></NavLink>
            {showNav? 
                <div className="links">
                    <ul className="menuList">
                    <li><NavLink className="menu-link" to="/" onClick={renderNavBar}>Home</NavLink><i class="fas fa-chalkboard"></i></li>
                        <li><NavLink className="menu-link" to="/assignments" onClick={renderNavBar}>Assignments</NavLink></li>
                        <li><NavLink className="menu-link" to="/schedule" onClick={renderNavBar}>Schedule</NavLink></li>
                        <li><NavLink className="menu-link" to="/grades" onClick={renderNavBar}>Student/Grades</NavLink></li>
                        <li><NavLink className="menu-link" to="/contact" onClick={renderNavBar}>Contact</NavLink></li>
                    </ul>
                </div> : ""
            }
        </div>
    )
}

export default NavBar
