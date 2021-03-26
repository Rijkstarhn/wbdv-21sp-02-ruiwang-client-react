import React, {useState} from 'react';

const ListWidget = ({updateWidget, deleteWidget, widget}) => {

    const [editingStatus, setEditingStatus] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <div>
            {
                editingStatus &&
                    <>
                        <input
                            onChange = {(event) => {
                            // here should be 'isOrderedList: !cachedWidget.isOrderedList' because
                            // the onChange event handler happens after onChange happened.
                            setCachedWidget({
                                ...cachedWidget, orderedList: !cachedWidget.orderedList
                            })
                        }}
                            checked = {cachedWidget.orderedList}
                            type = "checkbox"/> Ordered
                        <i onClick={() => {
                            console.log(cachedWidget)
                            updateWidget(cachedWidget)
                            setEditingStatus(false);
                        }} className="fas fa-check float-right"></i>
                        <i onClick={() => {
                            deleteWidget(widget.id);
                            setEditingStatus(false);
                        }} className="fas fa-trash float-right"></i>
                        <br/>
                        Item list
                        <textarea onChange = {(event) => setCachedWidget(
                            {...cachedWidget, text: event.target.value}
                        )}
                                  rows={10}
                                  value = {cachedWidget.text}
                                  className='form-control'>

                        </textarea>
                    </>
            }
            {
                !editingStatus &&
                    <>
                        <i onClick={() => setEditingStatus(true)} className="fas fa-2x fa-cog float-right"></i>
                        {
                            !cachedWidget.orderedList &&
                            <>
                                <ul>
                                    {
                                        cachedWidget.text.split('\n').map(item => <li>
                                            {item}
                                        </li>)
                                    }
                                </ul>
                            </>
                        }
                        {
                            cachedWidget.orderedList &&
                            <>
                                <ol>
                                    {
                                        cachedWidget.text.split('\n').map(item => <li>
                                            {item}
                                        </li>)
                                    }
                                </ol>
                            </>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget