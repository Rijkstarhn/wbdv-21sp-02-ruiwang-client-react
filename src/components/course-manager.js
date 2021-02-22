import React from 'react'
import CourseTable from './course-table/course-table';
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount = () => courseService.findAllCourses().then(courses => {
        this.setState({courses})
    })

    addCourse = () => {
        const newCourse = {title:'New Course', ownedBy:'RW', lastModified:'2021/02/20'}
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

    deleteCourse = (deletedCourse) => {
        courseService.deleteCourse(deletedCourse._id).then(status =>
            this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== deletedCourse)
                })
            ))
    }

    updateCourse = (course) => courseService.updateCourse(course._id, course).then(status => this.setState(
        (prevState) => ({
            ...prevState,
            courses: prevState.courses.map(oldCourse =>
                oldCourse._id === course._id ? course : oldCourse
            )
        })
    ))

    render() {
        return (
            <div className='container-fluid'>
                <div className = 'row'>
                    <div className ='col-lg-1'>
                        <i className='fas fa-2x fa-bars'></i>
                    </div>
                    <div className = 'col-lg-5 visible-lg'>
                        <h1>Course Manager</h1>
                    </div>
                    <div className = 'col-lg-5'>
                        <input className = 'form-control' />
                    </div>
                    <div className='col-lg-1'>
                        <i onClick = {() => this.addCourse()} className = 'fas fa-3x fa-plus-circle'></i>
                    </div>
                </div>
            {/*<button onClick = {this.addCourse}>Oh</button>*/}
            <Route path='/courses/table'>
                <CourseTable deleteCourse = {this.deleteCourse}
                             updateCourse = {this.updateCourse}
                             addCourse = {this.addCourse}
                             courses={this.state.courses}/>
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
