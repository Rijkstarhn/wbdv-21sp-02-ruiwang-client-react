import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({updateCourse, deleteCourse, course}) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Course Description</p>
                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`}>
                            <a href="#" className="btn btn-primary">{course.title}</a>
                        </Link>
                    }
                    {
                        editing &&
                        <input onChange = {(event) => setNewTitle(event.target.value)}
                               value={newTitle} className="form-control"/>
                    }
                    {!editing && <i onClick={() => setEditing(true)} className="editIconColor fas fa-edit"></i>}
                    {editing && <i onClick={() => saveTitle()} className="checkIconColor fas fa-check"></i>}
                    {editing && <i onClick={() =>
                    {   setEditing(false)
                        deleteCourse(course)
                        setNewTitle('')
                    }
                    } className="crossIconColor fas fa-times"></i>}
                </div>
            </div>
        </div>
    )
}

export default CourseCard