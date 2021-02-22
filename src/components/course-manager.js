import React from 'react'
import CourseTable from './course-table';
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager extends React.Component {

    state = {
        courses: []
        // courses: [{
        //     title:'OMG', ownedBy:'RW', lastModified:'2021/02/20'
        // },{
        //     title:'OMG3', ownedBy:'RW', lastModified:'2021/02/20'
        // }]
    }

    componentDidMount = () => courseService.findAllCourses().then(courses => {
        this.setState({courses})
        console.log(courses)
    })

    addCourse = () => {
        const newCourse = {title:'OMG4', ownedBy:'RW', lastModified:'2021/02/20'}
        courseService.createCourse(newCourse).then(course =>
            this.setState((prevState) => ({
                ...prevState,
                courses: [
                    course,
                    ...prevState.courses
                ]
            }))
        )
    }

    deleteCourse = (deletedCourse) => courseService.deleteCourse(deletedCourse._id).then(status =>
        this.setState((prevState) => ({
            ...prevState,
            courses: prevState.courses.filter(course => course !== deletedCourse)
        })
    ))

    render() {
        return (
            <div className='container-fluid'>
            <h1>Course Manager</h1>
            <button onClick = {this.addCourse}>Oh</button>
            <Route path='/courses/table'>
                <CourseTable deleteCourse = {this.deleteCourse}  courses={this.state.courses}/>
            </Route>
            <Route path='/courses/grid'>
                <CourseGrid deleteCourse = {this.deleteCourse} courses={this.state.courses}/>
            </Route>
            <Route path='/courses/editor' render={(props) => <CourseEditor {...props}/>}>
            </Route>
            </div>
        )
    }
}
