import React, {useState} from 'react'

function HomeTeacher(props) {

    const [classroom, setClassroom] = useState(0)

    const handleClassroom = (e) => {
      
        setClassroom(e.target.value)
    }
    
    return (
      
        <div className="classroom-input">
            Add Classroom
            <input placeholder="#" onChange={handleClassroom}></input>
            <button onClick={()=>props.handleTeacherAdd(classroom)} className="class-add-btn">add</button>
        </div>
    )
}

export default HomeTeacher
