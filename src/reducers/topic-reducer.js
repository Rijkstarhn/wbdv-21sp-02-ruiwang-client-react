import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS, UPDATE_TOPIC} from "../actions/topic-actions";

const initialState = {
    topics: [],
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_TOPICS:
            return {
                ...state,
                topics: action.topics,
            }
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic;
                    } else {
                        return topic;
                    }
                })
            }
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter((topic) => {
                    if (topic._id === action.topic._id) {
                        return false
                    } else {
                        return true
                    }
        })}
        default:
            return state;
    }
}

export default topicReducer