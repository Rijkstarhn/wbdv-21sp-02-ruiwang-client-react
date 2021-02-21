import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, courses}) =>
    <div>
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