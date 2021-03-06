const initialState = {
    lessons: [
        {_id: 123, title:'Lesson 123fromReducer'},
        {_id: 345, title:'Lesson 345fromReducer'},
        {_id: 667, title:'Lesson 456fromReducer'},
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
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
