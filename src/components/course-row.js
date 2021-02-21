import React from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse, course, title, ownedBy, lastModified}) =>
    <tr>
        <td>
            <Link to='/courses/editor'>
                {title}
            </Link>
        </td>
        <td>
            {ownedBy}
        </td>
        <td>
            {lastModified}
        </td>
        <td>
            <button class = 'btn' onClick = {() => deleteCourse(course)} ><i className="fas fa-edit iconRightMargin"></i></button>
        </td>
    </tr>

export default CourseRow