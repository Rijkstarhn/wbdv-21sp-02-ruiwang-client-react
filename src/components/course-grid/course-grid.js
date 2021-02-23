import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div className = 'container-fluid'>
        <div className = 'row'>
            <div className = 'col-4'>
                <h4>Recent Documents</h4>
            </div>
            <div className = 'col-4'>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" >
                    Owned by me
                </a>
            </div>
            <div className = 'col-4'>
                <Link to='/courses/table'>
                    <i className="fas fa-list float-right"></i>
                </Link>
                <i className="fas fa-sort-alpha-up-alt iconRightMargin float-right"></i>
                <i className = 'fa fa-folder iconRightMargin float-right'></i>
            </div>
        </div>
        <div className = 'row'>
            {courses.map((course, index) =>
                <CourseCard
                    key = {index}
                    course = {course}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}/>)}
        </div>
    </div>

export default CourseGrid