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
                    <th>
                        Owned by
                    </th>
                    <th>
                        Last modified
                    </th>
                    <th>
                        <i className = 'fa fa-folder iconRightMargin'></i>
                        <i className="fas fa-sort-alpha-up-alt iconRightMargin"></i>
                        <Link to ='/courses/grid'>
                            <i className = 'fa fa-th iconRightMargin'></i>
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
                        <i onClick = {() => this.props.addCourse()} className = 'fas fa-3x fa-plus-circle float-right'></i>
                    </div>
                </div>
        </div>
        )
    }
}


