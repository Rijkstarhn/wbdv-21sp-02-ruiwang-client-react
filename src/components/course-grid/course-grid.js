import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
    <div className = 'container-fluid'>
        <div className = 'row'>
            <div className = 'col-4'>
                <h4 className = '.d-none .d-md-block .d-lg-none'>Recent Documents</h4>
            </div>
            <div className = 'col-4'>
                <a className=".d-none .d-md-block .d-lg-none
                blackColor nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" >
                    Owned by me
                </a>
            </div>
            <div className = 'col-4'>
                <Link to='/courses/table'>
                    <i className="blackColor fas fa-list float-right"></i>
                </Link>
                <i className="fas fa-sort-alpha-up-alt iconRightMargin float-right"></i>
                <i className = 'fa fa-folder iconRightMargin float-right'></i>
            </div>
        </div>
        <div className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {courses.map((course, index) =>
                <CourseCard
                    key = {index}
                    course = {course}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}/>)}
        </div>
    </div>

export default CourseGrid