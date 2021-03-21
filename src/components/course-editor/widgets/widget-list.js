import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../../actions/widget-actions";

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
        createWidgetForTopic: (tid, widget) => widgetActions.createWidgetForTopic(dispatch, tid, widget),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        deleteWidget: (wid) => widgetActions.deleteWidget(dispatch, wid),
        findWidgetsForTopic: (tid) => widgetActions.findWidgetsForTopic(dispatch, tid),
    }
}

export default connect(stpm, dtpm) (WidgetList)