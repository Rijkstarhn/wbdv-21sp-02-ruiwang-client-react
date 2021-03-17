const initialState = {
    widgets: [],
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return {
                ...state,
                widgets: action.widgets
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: action.widgets.map(
                    widget => {
                        if (widget._id === action.updateWidget._id) {
                            return action.updateWidget
                        } else {
                            return widget
                        }
                    }
                )
            }

        case 'CREATE_WIDGET':
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(
                    widget => {
                        if (widget._id === action.deleteWidget._id) {
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
