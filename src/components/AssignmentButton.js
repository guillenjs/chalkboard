import React from 'react'

function AssignmentButton(props) {
    console.log(props.assign)
    return (
        <div className="assignment-container" 
            onClick={()=>props.handleCurrentAssignment(props.assign)}>
               <p> <b>{props.assign.title}</b> due:{props.assign.date} </p>
        </div>
    )
}

export default AssignmentButton
