import React from 'react'

function HomeUsersTeachers(props) {
    // console.log(props.friendship)
    // const teacher = props.teachers.filter( t => t.id === props.friendship.friend_id) 

    // const addTeacher = () => {
    //     props.handleAddTeacher(teacher[0])
    // }


console.log(props.actualTeacher)

    return (
        <div className="users-teachers">
            {/* {addTeacher}  */}
            {props.friendship.username}
        </div>
    )
}

export default HomeUsersTeachers