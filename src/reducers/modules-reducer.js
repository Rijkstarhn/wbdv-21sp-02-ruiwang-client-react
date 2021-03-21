import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/module-actions";


const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }

        case CREATE_MODULE:
            const createdModule = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return createdModule
        case DELETE_MODULE:
            const deletedModule = {
                modules: state.modules.filter((module) => {
                    if (module._id === action.deleteModule._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return deletedModule
        case UPDATE_MODULE:
            const updatedModule = {
                modules: state.modules.map (module => {
                    if (module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
            return updatedModule
        default:
            return state
    }
}

export default moduleReducer
