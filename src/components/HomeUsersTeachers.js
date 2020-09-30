import React from 'react'

function HomeUsersTeachers(props) {
    // console.log(props.friendship)
    const teacher = props.teachers.filter( t => t.id === props.friendship.friend_id)
    console.log(teacher)

    const addTeacher = () => {
        props.handleAddTeacher(teacher[0])
    }


    return (
        <div className="users-teachers">
            {addTeacher}
            {teacher[0].username}
        </div>
    )
}

export default HomeUsersTeachers
