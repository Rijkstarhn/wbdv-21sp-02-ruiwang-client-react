import React, {useEffect} from 'react';
import {connect} from "react-redux";
import topicService from '../services/topic-service'
import {useParams} from "react-router-dom";
import EditableItem from "./editable-item";
import topicActions from "../actions/topic-actions";

const TopicPills = ({
    myTopics=[],
    createTopic,
    findTopicsForLesson,
    deleteTopic,
    updateTopic}) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])

    return (
        <div>
            <ul className="pillsMargin nav nav-pills">
                {myTopics.map((topic) =>
                    <li className="nav-item pillMargin" key = {topic._id}>
                        <a className="nav-link" href="#">
                            <EditableItem
                                to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                active = {topic._id === topicId}
                                item = {topic}
                                deleteItem = {deleteTopic}
                                updateItem = {updateTopic}/>
                        </a>
                    </li>
                )}
                <li>
                    <i onClick = {() => createTopic(lessonId)} className = 'editIconColor fas fa-plus-circle fa-2x'></i>
                </li>
            </ul>
        </div>
    )
}


const stpm = (state) => {
    return {
        myTopics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId),
        createTopic: (lessonId) => topicActions.createTopic(dispatch, lessonId),
        deleteTopic: (topic) => topicActions.deleteTopic(dispatch, topic),
        updateTopic: (topic) => topicActions.updateTopic(dispatch, topic),
    }
}

export default connect (stpm, dtpm) (TopicPills);