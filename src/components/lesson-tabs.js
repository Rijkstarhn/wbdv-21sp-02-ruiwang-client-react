import React from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";

const LessonTabs = ({myLessons= [
    {_id: 123, title:'Lesson A'},
    {_id: 123, title:'Lesson B'},
    {_id: 123, title:'Lesson C'},
], deleteLesson = () => alert('lesson delete')}) =>
    <div>
        <h2>Lesson</h2>
        <ul className='nav nav-tabs'>
            {
                myLessons.map((lesson) =>
                    <li className = 'nav-item'>
                        <a href='#' className = 'nav-link'><EditableItem item={lesson} deleteItem={deleteLesson}/></a>
                    </li>)
            }
            {/*<li className = 'nav-item'>*/}
            {/*    <a href='#' className = 'nav-link'>{}</a>*/}
            {/*</li>*/}
            {/*<li className = 'nav-item'>*/}
            {/*    <a href='#' className = 'nav-link'>Lesson 2</a>*/}
            {/*</li>*/}
            {/*<li className = 'nav-item'>*/}
            {/*    <a href='#' className = 'nav-link active'>Lesson 3</a>*/}
            {/*</li>*/}
            {/*<li className = 'nav-item'>*/}
            {/*    <a href='#' className = 'nav-link'>Lesson 4</a>*/}
            {/*</li>*/}
            {/*<li className = 'nav-item'>*/}
            {/*    <a href='#' className = 'nav-link'>Lesson 5</a>*/}
            {/*</li>*/}
        </ul>
    </div>

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