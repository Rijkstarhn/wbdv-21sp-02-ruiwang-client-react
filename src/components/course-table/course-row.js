import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, updateCourse, course, title, ownedBy, lastModified}) => {

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
        <tr>
            <td>
                {
                    !editing &&
                    <Link to='/courses/editor'>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input onChange = {(event) => setNewTitle(event.target.value)}
                           value={newTitle} className="form-control"/>
                }
            </td>
            <td className = 'd-none d-md-table-cell'>
                {ownedBy}
            </td>
            <td className="d-none d-lg-table-cell">
                {lastModified}
            </td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className="editIconColor fas fa-edit"></i>}
                {editing && <i onClick={() => saveTitle()} className="checkIconColor fas fa-check"></i>}
                {editing && <i onClick={() =>
                    {setEditing(false)
                    deleteCourse(course)
                    setNewTitle('')}
                } className="crossIconColor fas fa-times"></i>}
            </td>
        </tr>
    )
}


export default CourseRow