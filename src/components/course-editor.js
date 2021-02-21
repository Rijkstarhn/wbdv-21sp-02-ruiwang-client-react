import React from 'react'

const CourseEditor = ({history}) =>
    <div>
        <i onClick = {() => history.goBack()} className='fas fa-times float-right'></i>
        <h2>WowEditor!</h2>
    </div>

export default CourseEditor