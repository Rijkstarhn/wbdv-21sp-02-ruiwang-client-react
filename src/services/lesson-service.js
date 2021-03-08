const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/ruiwang1991/modules";
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/ruiwang1991/lessons"

export const findLessonsForModule = (moduleId) => {
    return (
        fetch (`${MODULES_URL}/${moduleId}/lessons`).then(
        res => res.json()
    ))
}

export const createLessonForModule = (moduleId, lesson) => {
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(
        res => res.json()
    )
}

export const deleteLesson = (lessonId) =>
    fetch (`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    }).then (res => res.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type':'application/json'
        }
    }).then(res => res.json())

const api = {
    findLessonsForModule : findLessonsForModule,
    createLessonForModule,
    deleteLesson,
    updateLesson,
}

export default api;