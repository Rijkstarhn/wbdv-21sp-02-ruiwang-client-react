import topicService from "../services/topic-service";

export const FIND_TOPICS = 'FIND_TOPICS';
export const CREATE_TOPIC = 'CREATE_TOPIC';
export const DELETE_TOPIC = 'DELETE_TOPIC';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';


export const findTopicsForLesson = (dispatch, lessonId) => topicService.findTopicsForLesson(lessonId).then(
    topics => dispatch({type: FIND_TOPICS, topics: topics})
)
export const   createTopic = (dispatch, lessonId) => topicService.createTopic(lessonId, {title: 'New Topic'}).then(
    topic => dispatch({type: CREATE_TOPIC, topic: topic})

)
export const deleteTopic = (dispatch, topic) => topicService.deleteTopic(topic._id).then(
    status => dispatch({type: DELETE_TOPIC, topic: topic})
)
export const updateTopic = (dispatch, topic) => topicService.updateTopic(topic._id, topic).then (
    status => dispatch({type: UPDATE_TOPIC, topic: topic})
)

const topicActions = {
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic,
}

export default topicActions;