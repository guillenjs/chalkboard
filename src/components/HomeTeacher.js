import React, {useState} from 'react'

function HomeTeacher(props) {

    const [classroom, setClassroom] = useState(0)

    const handleClassroom = (e) => {
      
        setClassroom(e.target.value)
    }
    
    return (
      
        <div>
            <h1>Add Classroom</h1>
            <input placeholder="Class Number" onChange={handleClassroom}></input>
            <button onClick={()=>props.handleTeacherAdd(classroom)}>add</button>
        </div>
    )
}

export default HomeTeacher
