import React from 'react'
import CourseTable from './course-table/course-table';
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

export default class CourseManager extends React.Component {

    state = {
        courses: [],
        inputCourseTitle: "",
        editing: false,
    }

    componentDidMount = () => courseService.findAllCourses().then(courses => {
        this.setState({courses})
    })

    addCourse = () => {
        const newCourse = {title: this.state.inputCourseTitle, ownedBy: 'RW', lastModified: '2021/02/20'}
        courseService.createCourse(newCourse).then(course =>
            this.setState((prevState) => ({
                ...prevState,
                courses: [
                    course,
                    ...prevState.courses
                ]
            }))
        )
        this.setState({inputCourseTitle:''})
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

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <i className='fas fa-2x fa-bars'></i>
                        <h1 className = 'courseManagerLeftMargin'>Course Manager</h1>
                    </div>
                    <form className="form-inline">
                        <input onChange = {event => this.setState({inputCourseTitle:event.target.value})}
                               value = {this.state.inputCourseTitle}
                               className = 'form-control form-control mr-sm-2' />
                        <i onClick = {() => this.addCourse()} className = 'redColor plusIconMargin fas fa-3x fa-plus-circle'></i>
                    </form>
                </nav>

                {/*<div className = 'row'>*/}
                {/*    <div className ='col-lg-1'>*/}
                {/*        <i className='fas fa-2x fa-bars'></i>*/}
                {/*    </div>*/}
                {/*    <div className = 'col-lg-5 visible-lg'>*/}
                {/*        <h1>Course Manager</h1>*/}
                {/*    </div>*/}
                {/*    <div className = 'col-lg-5'>*/}
                {/*        <input onChange = {event => this.setState({inputCourseTitle:event.target.value})}*/}
                {/*               className = 'form-control' />*/}
                {/*    </div>*/}
                {/*    <div className='col-lg-1'>*/}
                {/*        <i onClick = {() => this.addCourse()} className = 'fas fa-3x fa-plus-circle'></i>*/}
                {/*    </div>*/}
                {/*</div>*/}
            {/*<button onClick = {this.addCourse}>Oh</button>*/}
            <Route path='/courses/table'>
                <CourseTable deleteCourse = {this.deleteCourse}
                             updateCourse = {this.updateCourse}
                             addCourse = {this.addCourse}
                             courses={this.state.courses}/>
            </Route>
            <Route path='/courses/grid'>
                <CourseGrid updateCourse = {this.updateCourse} deleteCourse = {this.deleteCourse} courses={this.state.courses}/>
            </Route>
            <Route path='/courses/editor' render={(props) => <CourseEditor {...props}/>}>
            </Route>
            </div>
        )
    }
}
