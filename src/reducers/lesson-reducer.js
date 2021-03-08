const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LESSON':
            return {
                lessons: state.lessons.map (lesson => {
                    if (lesson._id === action.updateLesson._id) {
                        return action.updateLesson
                    } else {
                        return lesson
                    }
                })
            }
        case 'CREATE_LESSON':
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case 'DELETE_LESSON':
            const deletedLesson = {
                lessons: state.lessons.filter((lesson) => {
                        if(lesson._id === action.deleteLesson._id) {
                            return false
                        } else {
                            return true
                        }
                    }
                )
            }
            return deletedLesson
        case 'FIND_LESSONS':
            return {
                ...state,
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer
