import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, courses}) =>
    <div>
        <Link to='/courses/table'>
            <i className='fas fa-check float-right' ></i>
        </Link>
        <h2>Course Grid</h2>
        <div className = 'row'>
            {courses.map((course, index) =>
                <CourseCard
                    key = {index}
                    course = {course}
                    deleteCourse={deleteCourse}/>)}
        </div>
    </div>

export default CourseGrid