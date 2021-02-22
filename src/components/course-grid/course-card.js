import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course}) =>
    <div className='col-4'>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <Link to='/courses/editor'>
                    <h5 className="card-title">{course.title}</h5>
                </Link>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <i onClick = {() => deleteCourse(course)} className='fas fa-check-circle'></i>
            </div>
        </div>
    </div>

export default CourseCard