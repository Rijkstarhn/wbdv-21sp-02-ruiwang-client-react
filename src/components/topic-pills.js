import React, {useEffect} from 'react';
import {connect} from "react-redux";
import topicService from '../services/topic-service'
import {useParams} from "react-router-dom";
import EditableItem from "./editable-item";

const TopicPills = ({
    myTopics=[],
    createTopic,
    findTopicsForLesson,
    deleteTopic,
    updateTopic}) => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (
        <div>
            <ul className="pillsMargin nav nav-pills">
                {myTopics.map((topic) =>
                    <li className="nav-item pillMargin">
                        <a className="nav-link" href="#">
                            <EditableItem
                                to = {`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                active = {topic._id === topicId}
                                item = {topic}
                                deleteItem = {deleteTopic}
                                updateItem = {updateTopic}/>
                        </a>
                    </li>
                )}
                <li>
                    <i onClick = {() => createTopic(lessonId)} className = 'fas fa-plus-circle'></i>
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
        findTopicsForLesson: (lessonId) => topicService.findTopicsForLesson(lessonId).then(
            topics => dispatch({type: 'FIND_TOPICS', topics: topics})
        ),
        createTopic: (lessonId) => topicService.createTopic(lessonId, {title: 'New Topic debug'}).then(
            topic => {
                console.log(topic)
                dispatch({type: 'CREATE_TOPIC', topic: topic})
            }
        ),
        deleteTopic: (topic) => topicService.deleteTopic(topic._id).then(
            status => dispatch({type:'DELETE_TOPIC', topic: topic})
        ),
        updateTopic: (topic) => topicService.updateTopic(topic._id, topic).then (
            status => dispatch({type: 'UPDATE_TOPIC', topic: topic})
        )
    }
}

export default connect (stpm, dtpm) (TopicPills);