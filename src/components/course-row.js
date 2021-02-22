import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, course, title, ownedBy, lastModified}) => {

    const [editing, setEditing] = useState(false)

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
                    <input value={title} className="form-control"/>
                }
            </td>
            <td>
                {ownedBy}
            </td>
            <td>
                {lastModified}
            </td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => setEditing(false)} className="fas fa-check"></i>}
            </td>
        </tr>
    )
}


export default CourseRow