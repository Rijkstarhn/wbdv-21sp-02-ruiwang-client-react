import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";

const ModuleList = ({
                        myModules=[],
                        createModule = () => alert('cm'),
                        deleteModule = () => alert('moduleListDeleteModule'),
                        updateModule = () => alert('moduleListUpdateModule'),
                    }) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className='list-group'>
            {myModules.map((module) =>
                <li className = 'list-group-item'>
                    <EditableItem
                        item = {module}
                        deleteItem = {deleteModule}
                        updateItem = {updateModule}/>
                </li>)}
                <li className = 'list-group-item'>
                    <i onClick = {createModule} className = 'fas fa-plus-circle fa-2x'></i>
                </li>
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: () => dispatch({type: 'CREATE_MODULE'}),
        deleteModule: (item) => dispatch({type: 'DELETE_MODULE', deleteModule: item}),
        updateModule: (item) => dispatch({type: 'UPDATE_MODULE', updateModule: item})
    }
}

export default connect(stpm, dtpm)(ModuleList)