import React from 'react'

function HomeUsersTeachers(props) {
    // console.log(props.friendship)
    const teacher = props.teachers.filter( t => t.id === props.friendship.friend_id)
    console.log(teacher)
    return (
        <div className="users-teachers">
            {teacher[0].username}
        </div>
    )
}

export default HomeUsersTeachers
