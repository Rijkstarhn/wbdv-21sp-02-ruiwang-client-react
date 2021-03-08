import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = ({
    myLessons= [], updateLesson,
    deleteLesson = (lessonId) => alert('lesson delete'),
    findLessonsForModule = (moduleId) => alert('find Lessons For Module'),
    createLessonForModule = (moduleId, lesson) => alert('create Lesson For Module'),}) => {

    const {courseId, moduleId, lessonId, layout} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
        // console.log('from useEffect lesson tabs', moduleId)
    }, [moduleId])
    // console.log('lessonId in lesson-tab', lessonId);
    return (
        <div>
            <ul className='nav nav-pills'>
                {
                    myLessons.map((lesson) =>
                        <li className = 'nav-item'>
                            <a href='#' className = 'nav-link'>
                                <EditableItem to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                              item={lesson}
                                              deleteItem={deleteLesson}
                                              updateItem = {updateLesson}
                                              active = {lesson._id === lessonId}
                                />
                            </a>
                        </li>)
                }
                <li>
                    <i onClick = {() => createLessonForModule(moduleId)} className = 'editIconColor fas fa-plus-circle'></i>
                </li>
            </ul>
        </div>
    )
}


const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}

// feed the LessonTabs with functions from Provider connected by connect(stpm, dtpm)
const dtpm = (dispatch) => {
    return {
        deleteLesson: (lesson) => lessonService.deleteLesson(lesson._id).then(
            status => dispatch({type: 'DELETE_LESSON', deleteLesson: lesson})
        ),
        findLessonsForModule:(moduleId) => lessonService.findLessonsForModule(moduleId).then(
            lessons => dispatch({type: 'FIND_LESSONS', lessons: lessons})
        ),
        createLessonForModule: (moduleId, lesson) => lessonService.createLessonForModule(moduleId, {title: 'New Lesson'}).then(
            lesson => dispatch({type: 'CREATE_LESSON', lesson})
        ),
        updateLesson: (lesson) => lessonService.updateLesson(lesson._id, lesson).then(
            status => dispatch({type:'UPDATE_LESSON', updateLesson: lesson})
        )
    }
}

export default connect(stpm, dtpm) (LessonTabs)