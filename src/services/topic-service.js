const LESSON_URL = 'https://wbdv-generic-server.herokuapp.com/api/ruiwang1991/lessons'
const TOPIC_URL = 'https://wbdv-generic-server.herokuapp.com/api/ruiwang1991/topics'

export const findTopicsForLesson = (lessonId) =>
    fetch (`${LESSON_URL}/${lessonId}/topics`).then(res => res.json());

export const createTopic = (lessonId, topic) => {
    console.log('createLessonServiceCalled');
    return (fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

}

export const deleteTopic = (topicId) =>
    fetch (`${TOPIC_URL}/${topicId}`, {
        method: 'DELETE'
    }).then (res => res.json())

export const updateTopic = (topicId, topic) =>
    fetch (`${TOPIC_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type':'application/json'
        }
    }).then(res => res.json())

const api = {
    findTopicsForLesson, createTopic, deleteTopic, updateTopic,
}

export default api;
