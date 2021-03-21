import moduleService from "../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FIND_LESSONS = "FIND_LESSONS"
export const FIND_TOPICS = "FIND_TOPICS"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const createModule = (dispatch, courseId) => {
    moduleService.createModuleForCourse(courseId, {title: 'New Module'}).then(actualModule =>
        dispatch({type: CREATE_MODULE, module: actualModule}));
}

export const deleteModule = (dispatch, item) =>
    moduleService.deleteModule(item._id).then(
        status => {
            dispatch({type: DELETE_MODULE, deleteModule: item})
            dispatch({type: FIND_LESSONS, lessons: []})
            dispatch({type: FIND_TOPICS, topics: []})
        })

export const updateModule = (dispatch, module) => moduleService.updateModule(module._id, module).then(
    status => dispatch({type: UPDATE_MODULE, updateModule: module})
)
export const findModulesForCourse = (dispatch, courseId) => moduleService.findModulesForCourse(courseId).then(
    theModules => dispatch({type: FIND_MODULES_FOR_COURSE, modules: theModules})
)

const moduleActions = {
    createModule,
    deleteModule,
    updateModule,
    findModulesForCourse,
}

export default moduleActions