import React, {useState}from 'react'

const CourseNavBar = ({addCourse}) => {

    const [newTitle, setNewTitle] = useState('')

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='row navbar navbar-light bg-light navbar-expand-lg'>
            <div className='col-2 col-lg-1'><i className='fas fa-2x fa-bars'></i></div>
            <div className='col-lg-4 d-none d-lg-block'><h1>Course Manager</h1></div>
            <div className='col-8 col-lg-6'><input onChange={event => setNewTitle(event.target.value)}
                                             value={newTitle}
                                             className='form-control form-control mr-sm-2'/></div>
            <div className='col-2 col-lg-1'><i onClick={() => {addCourse(newTitle); setNewTitle('')}}
                                         className='redColor fas fa-3x fa-plus-circle'></i></div>
            {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*    */}
            {/*    */}
            {/*</div>*/}
            {/*<form className="form-inline">*/}
            {/*    */}
            {/*    */}
            {/*</form>*/}
            </div>)
        // </nav>)
}

export default CourseNavBar