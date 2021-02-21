import React from 'react'
import CourseTable from './course-table';
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

export default class CourseManager extends React.Component {

    state = {
        courses: [{
            title:'OMG', ownedBy:'RW', lastModified:'2021/02/20'
        },{
            title:'OMG3', ownedBy:'RW', lastModified:'2021/02/20'
        }]
    }

    addCourse = () => {
        const newCourse = {title:'OMG4', ownedBy:'RW', lastModified:'2021/02/20'};
        this.state.courses.push(newCourse);
        this.setState(this.state.courses);
    }

    deleteCourse = (deletedCourse) => {
        let newCourses = this.state.courses.filter(course => course !== deletedCourse)
        this.setState({courses:newCourses})
    }

    render() {
        return (
            <div className='container-fluid'>
            <h1>Course Manager</h1>
                <button onClick = {this.addCourse}>Oh</button>
            <CourseTable deleteCourse = {this.deleteCourse}  courses={this.state.courses}/>
            <CourseGrid deleteCourse = {this.deleteCourse} courses={this.state.courses}/>
            <CourseEditor />
            </div>
        )
    }
}
