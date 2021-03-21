import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widget-actions";

const initialState = {
    widgets: [],
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(
                    widget => {
                        if (widget.id === action.updateWidget.id) {
                            return action.updateWidget
                        } else {
                            return widget
                        }
                    }
                )
            }

        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(
                    widget => {
                        if (widget.id === action.deleteWidgetId) {
                            return false
                        } else {
                            return true
                        }
                    }
                )
            }
        default:
            return state
    }
}

export default widgetReducer
