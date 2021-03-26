import widgetService from "../services/widget-service";

export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const FIND_ALL_WIDGETS_FOR_TOPIC = 'FIND_ALL_WIDGETS_FOR_TOPIC';

export const createWidgetForTopic = (dispatch, tid, widget) => {
    widgetService.createWidget(tid, widget).then(
        widget => dispatch({type: CREATE_WIDGET, widget: widget})
    )
}
export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, widget).then(
        status => {
            dispatch({type: UPDATE_WIDGET, updateWidget: widget})
        }
    )
export const deleteWidget = (dispatch, wid) =>
    widgetService.deleteWidget(wid).then(
        status => dispatch({type: DELETE_WIDGET, deleteWidgetId: wid})
    )

export const findWidgetsForTopic = (dispatch, tid) => {
    widgetService.findWidgetsForTopic(tid).then (
        widgets => dispatch({type: FIND_ALL_WIDGETS_FOR_TOPIC, widgets: widgets})
    )
}

const widgetActions = {
    createWidgetForTopic,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic,
}

export default widgetActions;