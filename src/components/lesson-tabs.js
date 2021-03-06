import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = ({
    myLessons=
        [{_id: 123, title:'Lesson A'},
            {_id: 123, title:'Lesson B'},
            {_id: 123, title:'Lesson C'},],
    deleteLesson = () => alert('lesson delete'),
    findLessonsForModule = (moduleId) => alert('find Lessons For Module'),
    createLessonForModule = (moduleId, lesson) => alert('create Lesson For Module'),}) => {

    const {courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return (
        <div>
            <h2>Lesson</h2>
            <ul className='nav nav-pills'>
                {
                    myLessons.map((lesson) =>
                        <li className = 'nav-item'>
                            <a href='#' className = 'nav-link'>
                                <EditableItem to = {`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                              item={lesson}
                                              deleteItem={deleteLesson}
                                              active = {lesson._id === lessonId}
                                />
                            </a>
                        </li>)
                }
                <li>
                    <i onClick = {() => createLessonForModule(moduleId)} className = 'fas fa-plus-circle'></i>
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
        deleteLesson: (item) => dispatch({type: 'DELETE_LESSON', deleteLesson: item}),
        findLessonsForModule:(moduleId) => lessonService.findLessonsForModule(moduleId).then(
            lessons => dispatch({type: 'FIND_LESSONS', lessons: lessons})
        ),
        createLessonForModule: (moduleId, lesson) => lessonService.createLessonForModule(moduleId, lesson).then(
            lesson => dispatch({type: 'CREATE_LESSON', lesson})
        ),
    }
}

export default connect(stpm, dtpm) (LessonTabs)