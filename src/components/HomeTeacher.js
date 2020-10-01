import React, {useState} from 'react'

function HomeTeacher(props) {

    const [classroom, setClassroom] = useState(0)

    const handleClassroom = (e) => {
      
        setClassroom(e.target.value)
    }
    
    return (
      
        <div className="classroom-input">
            <h1>Add Classroom</h1>
            <input placeholder="#" onChange={handleClassroom}></input>
            <button onClick={()=>props.handleTeacherAdd(classroom)} className="class-add-btn">add</button>
        </div>
    )
}

export default HomeTeacher
