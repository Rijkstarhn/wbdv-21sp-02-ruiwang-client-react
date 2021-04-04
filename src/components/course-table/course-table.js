import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

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
                    <th className="d-none d-md-table-cell">
                        Owned by
                    </th>
                    <th className="d-none d-lg-table-cell">
                        Last modified
                    </th>
                    <th className="d-none d-lg-table-cell">
                        Quizzes
                    </th>
                    <th>
                        <i className = 'fas fa-folder iconRightMargin'></i>
                        <i className="fas fa-sort-alpha-up-alt iconRightMargin"></i>
                        <Link to ='/courses/grid'>
                            <i className = 'blackColor fas fa-th iconRightMargin'></i>
                        </Link>
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
                            deleteCourse = {this.props.deleteCourse}
                            updateCourse = {this.props.updateCourse}/>)
                }
                </tbody>
            </table>
                <div className='row'>
                    <div className = 'col'>
                        <i onClick = {() => this.props.addCourse()}
                           className = 'redColor my-plus-stuck-at-bottom-right fas fa-3x fa-plus-circle float-right'></i>
                    </div>
                </div>
        </div>
        )
    }
}



