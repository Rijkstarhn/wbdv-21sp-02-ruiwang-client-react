import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";

import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service";

const WidgetList = ({myWidgets = [], createWidgetForTopic, updateWidget, deleteWidget, findWidgetsForTopic}) => {
    const {topicId, wid} = useParams();
    const [widgets, setWidgets] = useState([]);
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])
    return (
        <div>
            <h2>Widget List {myWidgets.length}</h2>
            <ul className = 'list-group'>
                {myWidgets.map(widget =>
                    <li className = 'list-group-item' key = {widget.id}>
                        {widget.text}
                        {
                            editingWidget.id === widget.id &&
                            <>
                                <i onClick={() => {updateWidget(widget)}} className="fas fa-2x fa-check float-right"></i>
                                <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                            </>
                        }
                    </li>)
                }
                <li className = 'list-group-item'>
                    <a href='#' className = 'fas fa-plus-circle fa-2x'
                       onClick={() => createWidgetForTopic(topicId, {title: 'Not important what here is'})}>
                    </a>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        myWidgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidgetForTopic: (tid, widget) => {
            console.log('tid', tid);
            widgetService.createWidget(tid, widget).then(
                widget => dispatch({type:'CREATE_WIDGET', widget: widget})
            )
        },
        updateWidget: (widget) =>
            widgetService.updateWidget(widget._id, widget).then(
                status => dispatch({type:'UPDATE_WIDGET', updateWidget: widget})
            ),
        deleteWidget: (wid) =>
            widgetService.deleteWidget(wid).then(
                status => dispatch({type:'DELETE_WIDGET'})
            ),
        findWidgetsForTopic: (tid) => {
            console.log('tidFind', tid);
            widgetService.findWidgetsForTopic(tid).then (
                widgets => dispatch({type: 'FIND_ALL_WIDGETS_FOR_TOPIC', widgets: widgets})
            )
        },
    }
}

export default connect(stpm, dtpm) (WidgetList)