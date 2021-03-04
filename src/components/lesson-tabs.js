import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = ({myLessons= [
    {_id: 123, title:'Lesson A'},
    {_id: 123, title:'Lesson B'},
    {_id: 123, title:'Lesson C'},
], deleteLesson = () => alert('lesson delete'),
                        findLessonsForModule = () => alert('find Lessons For Module')}) => {

    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [])

    const {courseId, moduleId} = useParams();

    return (
        <div>
            <h2>Lesson</h2>
            <ul className='nav nav-tabs'>
                {
                    myLessons.map((lesson) =>
                        <li className = 'nav-item'>
                            <a href='#' className = 'nav-link'>
                                <EditableItem to = {`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                              item={lesson}
                                              deleteItem={deleteLesson}/>
                            </a>
                        </li>)
                }
            </ul>
        </div>
    )
}


const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {
    return {
        deleteLesson: (item) => dispatch({type: 'DELETE_LESSON', deleteLesson: item})
    }
}

export default connect(stpm, dtpm) (LessonTabs)