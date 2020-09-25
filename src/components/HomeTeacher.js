import React from 'react'

function HomeTeacher(props) {
    
    return (
        <div>
            <p>{props.teacher.username} <button value={props.teacher.id} onClick={props.handleTeacherAdd}>add</button></p>
        </div>
    )
}

export default HomeTeacher
