import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonActions from "../actions/lesson-actions";

const LessonTabs = ({
    myLessons= [], updateLesson,
    deleteLesson = (lessonId) => alert('lesson delete'),
    findLessonsForModule = (moduleId) => alert('find Lessons For Module'),
    createLessonForModule = (moduleId, lesson) => alert('create Lesson For Module'),}) => {

    const {courseId, moduleId, lessonId, layout} = useParams();

    useEffect(() => {
        findLessonsForModule(moduleId)
        // if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
        //
        // }
    }, [moduleId])
    // console.log('lessonId in lesson-tab', lessonId);
    return (
        <div>
            <ul className='nav nav-pills'>
                {
                    myLessons.map((lesson) =>
                        <li className = 'nav-item' key = {lesson._id}>
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
                    <i onClick = {() => createLessonForModule(moduleId)} className = 'editIconColor fas fa-plus-circle fa-2x'></i>
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
        deleteLesson: (lesson) => lessonActions.deleteLesson(dispatch, lesson),
        findLessonsForModule:(moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId),
        createLessonForModule: (moduleId, lesson) => lessonActions.createLessonForModule(dispatch, moduleId, lesson),
        updateLesson: (lesson) => lessonActions.updateLesson(dispatch, lesson),
    }
}

export default connect(stpm, dtpm) (LessonTabs)