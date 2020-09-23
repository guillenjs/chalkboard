import React from 'react'
import { NavLink } from 'react-router-dom'

function AssignmentButton(props) {
    
    return (
        <NavLink to='/assignmetview'><div className="assignment-container" 
            onClick={()=>props.handleCurrentAssignment(props.assign)}>
               <p> <b>{props.assign.title}</b> due:{props.assign.date} </p>
        </div></NavLink>
    )
}

export default AssignmentButton
