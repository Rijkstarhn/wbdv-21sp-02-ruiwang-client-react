import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from '../services/module-service'

const ModuleList = ({
                        myModules=[],
                        createModule = () => console.log('cm'),
                        deleteModule = () => console.log('moduleListDeleteModule'),
                        updateModule = () => console.log('moduleListUpdateModule'),
                        findModulesForCourse = (courseId) => console.log(courseId, "from findModulesForCourse")
                    }) => {
    const {courseId, moduleId, layout} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    console.log(courseId)
    return (
        <div>
            <ul className='list-group'>
                {myModules.map((module) =>
                    <li className = {`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        <EditableItem
                            to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            item = {module}
                            deleteItem = {deleteModule}
                            updateItem = {updateModule}/>
                    </li>)}
                <li className = 'list-group-item'>
                    <i onClick = {() => createModule(courseId)} className = 'editIconColor fas fa-plus-circle fa-2x'></i>
                </li>
            </ul>
        </div>
    )}


const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: 'New Module'}).then(actualModule =>
                dispatch({type: 'CREATE_MODULE', module: actualModule}));
        }
        ,
        deleteModule: (item) =>
            moduleService.deleteModule(item._id).then(
                status => {
                    dispatch({type: 'DELETE_MODULE', deleteModule: item})
                    dispatch({type: 'FIND_LESSONS', lessons: []})
                    dispatch({type: 'FIND_TOPICS', topics: []})
                })
        ,
        updateModule: (module) => moduleService.updateModule(module._id, module).then(
            status => dispatch({type: 'UPDATE_MODULE', updateModule: module})
        ),
        findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId).then(
            theModules => dispatch({type: 'FIND_MODULES_FOR_COURSE', modules: theModules})
        ),
    }
}

export default connect(stpm, dtpm)(ModuleList)