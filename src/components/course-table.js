import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            <table className = 'table'>
                <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Owned by
                    </th>
                    <th>
                        Last modified
                    </th>
                    <th>
                        <i className = 'fa fa-folder iconRightMargin'></i>
                        <i className="fas fa-sort-alpha-up-alt iconRightMargin"></i>
                        <i className = 'fa fa-th iconRightMargin'></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.courses.map((course,index) =>
                        <CourseRow
                            key = {index}
                            course = {course}
                            title = {course.title}
                            ownedBy={course.ownedBy}
                            lastModified={course.lastModified}
                            deleteCourse = {this.props.deleteCourse} />)
                }
                </tbody>
            </table>
        </div>
        )
    }
}



