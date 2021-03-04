import React from 'react'
import CourseTable from './course-table/course-table';
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import CourseEditorBack from "./course-editorBack"
import {Route} from "react-router-dom";
import courseService from "../services/course-service";
import CourseNavBar from "./course-navbar";

export default class CourseManager extends React.Component {

    state = {
        courses: [],
        inputCourseTitle: "",
        editing: false,
        showInput: true,
        showRightUpAddIcon: true,
    }

    componentDidMount = () => courseService.findAllCourses().then(courses => {
        this.setState({courses})
    })

    addCourse = (inputCourseTitle) => {
        const newCourse = {title: inputCourseTitle, ownedBy: 'RW', lastModified: '2021/02/20'}
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
            <Route path='/courses/table'>
                <CourseNavBar addCourse = {this.addCourse}/>
                <CourseTable deleteCourse = {this.deleteCourse}
                             updateCourse = {this.updateCourse}
                             addCourse = {this.addCourse}
                             courses={this.state.courses}/>
            </Route>
            <Route path='/courses/grid'>
                <CourseNavBar addCourse = {this.addCourse}/>
                <CourseGrid updateCourse = {this.updateCourse} deleteCourse = {this.deleteCourse} courses={this.state.courses}/>
            </Route>
                {/*Below the path={[]} expression is a good way to make many url reference to one page*/}
            <Route path={['/courses/editor/:courseId/:moduleId','/courses/editor/:courseId/:moduleId/:lessonId']}
                   render={(props) => <CourseEditor {...props}/>}>
            </Route>
            <Route path = '/courses/editorback'>
                <CourseEditorBack />
            </Route>
            </div>
        )
    }
}
