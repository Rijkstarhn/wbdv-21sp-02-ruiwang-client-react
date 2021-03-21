import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleActions from "../actions/module-actions";

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
    return (
        <div>
            <ul className='list-group'>
                {myModules.map((module) =>
                    <li className = {`list-group-item ${module._id === moduleId ? 'active' : ''}`} key = {module._id}>
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
        createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
        deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
        updateModule: (module) => moduleActions.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId),
    }
}

export default connect(stpm, dtpm)(ModuleList)