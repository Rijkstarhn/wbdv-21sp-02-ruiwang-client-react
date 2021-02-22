import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course}) => {

    const [editing, setEditing] = useState(false)

    const saveTitle = () => console.log('123')

    return (
        <div className='col-4'>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Course Description</p>
                    <Link to='/courses/editor'>
                        <a href="#" className="btn btn-primary">{course.title}</a>
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
                    {editing && <i onClick={() =>
                    {setEditing(false)
                        deleteCourse(course)}
                    } className="fas fa-times"></i>}
                </div>
            </div>
            {/*<div className="card" style={{width: '18rem'}}>*/}
            {/*    <div className="card-body">*/}
            {/*        <Link to='/courses/editor'>*/}
            {/*            <h5 className="card-title">{course.title}</h5>*/}
            {/*        </Link>*/}
            {/*        <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
            {/*            of the card's content.</p>*/}
            {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            {/*        <i onClick = {() => deleteCourse(course)} className='fas fa-check-circle'></i>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default CourseCard