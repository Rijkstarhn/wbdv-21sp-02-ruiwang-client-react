import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import ModuleList from "../module-list";
import LessonTabs from "../lesson-tabs";
import TopicPills from "../topic-pills";
import courseService from "../../services/course-service";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";



// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, layout} = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    
    useEffect(() => courseService.findCourseById(courseId).then(
        res => setCourseTitle(res.title)
    ), [])
    // console.log('layoutId', layout);
    return (
        <Provider store = {store}>
        <div>
            <div className="container-fluid">
                <div className="row col-sm-12 ">
                    <div className="col-form-label col-sm-4">
                        {/*<Link to = '/courses/editorback'>*/}
                        {/*    <i className="navDivMargin fas fa-arrow-left"></i>*/}
                        {/*</Link>*/}
                        <Link to ={`/courses/${layout}`}>
                            <i className="editIconColor navDivMargin fas fa-times"></i>
                        </Link>
                        {/*<i onClick={() => history.goBack()}*/}
                        {/*   className="editIconColor navDivMargin fas fa-times"></i>*/}
                        <a className=" navbar-brand mb-0 h1" href="#">{courseTitle}</a>
                    </div>

                    <div className="col-form-label col-sm-8">
                        <ul className="nav nav-tabs mr-auto nav-fill">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Build<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Theme<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Store<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className=" fas fa-plus-circle fa-2x"></i><span
                                    className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4'>
                    <ModuleList />
                </div>
                <div className = 'col-8'>
                    <LessonTabs />
                    <TopicPills />
                    <WidgetList />
                </div>
            </div>
        </div>
    </Provider>
    )
}

export default CourseEditor