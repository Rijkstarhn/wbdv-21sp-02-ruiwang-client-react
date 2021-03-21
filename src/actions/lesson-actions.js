import lessonService from "../services/lesson-service";

export const DELETE_LESSON = 'DELETE_LESSON'
export const FIND_TOPICS = 'FIND_TOPICS'
export const FIND_LESSONS = 'FIND_LESSONS'
export const CREATE_LESSON = 'CREATE_LESSON'
export const UPDATE_LESSON = 'UPDATE_LESSON'

export const deleteLesson = (dispatch, lesson) => lessonService.deleteLesson(lesson._id).then(
    status => {
        dispatch({type: DELETE_LESSON, deleteLesson: lesson})
        // refresh the module contents after deleting
        dispatch({type: FIND_TOPICS, topics: []})
    }
)
export const findLessonsForModule = (dispatch, moduleId) => lessonService.findLessonsForModule(moduleId).then(
    lessons => dispatch({type: FIND_LESSONS, lessons: lessons})
)

export const createLessonForModule = (dispatch, moduleId, lesson) => lessonService.createLessonForModule(moduleId, {title: 'New Lesson'}).then(
    lesson => dispatch({type: CREATE_LESSON, lesson})
)

export const updateLesson = (dispatch, lesson) => lessonService.updateLesson(lesson._id, lesson).then(
    status => dispatch({type: UPDATE_LESSON, updateLesson: lesson})
)

const lessonActions = {
    deleteLesson,
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
}

export default lessonActions;

