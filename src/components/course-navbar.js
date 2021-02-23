import React, {useState}from 'react'

const CourseNavBar = ({addCourse}) => {

    const [newTitle, setNewTitle] = useState('')

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <i className='fas fa-2x fa-bars'></i>
            <h1 className='courseManagerLeftMargin'>Course Manager</h1>
        </div>
        <form className="form-inline">
            <input onChange={event => setNewTitle(event.target.value)}
                   value={newTitle}
                   className='form-control form-control mr-sm-2'/>
            <i onClick={() => addCourse(newTitle)}
               className='redColor plusIconMargin fas fa-3x fa-plus-circle'></i>
        </form>
    </nav>)
}

export default CourseNavBar