import React from 'react'

const CourseRow = ({deleteCourse, course, title, ownedBy, lastModified}) =>
    <tr>
        <td>
            {title}
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