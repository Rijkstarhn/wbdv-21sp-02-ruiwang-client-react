import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
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
            <br/>
            <div className = 'row'>
                <div className = 'col'>
                    <h1>Widget Lists</h1>
                </div>
                <div className = 'col'>
                    <i onClick={() => createWidgetForTopic(topicId, {title: 'Not important what here is'})}
                       className="editIconColor fas fa-plus-circle fa-2x float-right"></i>
                </div>
            </div>
            <br/>
            <ul className = 'list-group'>
                {myWidgets.map(widget =>
                    <li className = 'list-group-item' key = {widget.id}>
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        }
                    </li>)
                }
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
            // console.log('tid', tid);
            widgetService.createWidget(tid, widget).then(
                widget => dispatch({type:'CREATE_WIDGET', widget: widget})
            )
        },
        updateWidget: (widget) =>
            widgetService.updateWidget(widget.widgetId, widget).then(
                status => {
                    // console.log('updateStatus', widget);
                    dispatch({type: 'UPDATE_WIDGET', updateWidget: widget})
                }
            ),
        deleteWidget: (wid) =>
            widgetService.deleteWidget(wid).then(
                status => dispatch({type:'DELETE_WIDGET', deleteWidgetId: wid})
            ),
        findWidgetsForTopic: (tid) => {
            // console.log('tidFind', tid);
            widgetService.findWidgetsForTopic(tid).then (
                widgets => dispatch({type: 'FIND_ALL_WIDGETS_FOR_TOPIC', widgets: widgets})
            )
        },
    }
}

export default connect(stpm, dtpm) (WidgetList)