import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [editingStatus, setEditingStatus] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);
    return(
        <>
            {
                editingStatus &&
                <>
                    <i onClick={() => {
                        updateWidget(cachedWidget)
                        setEditingStatus(false);
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => {
                        deleteWidget(widget.id);
                        setEditingStatus(false);
                    }} className="fas fa-trash float-right"></i>
                    <select value={cachedWidget.type} className="form-control"
                            onChange = {(event) => setCachedWidget({
                                ...widget, type: event.target.value
                            })}>
                        <option value='HEADING'>Heading</option>
                        <option value='PARAGRAPH'>Paragraph</option>
                        <option value='VIDEO'>Video</option>
                        <option value='IMAGE'>Image</option>
                        <option value='LINK'>Link</option>
                        <option value='LIST'>List</option>
                        <option value='HTML'>HTML</option>
                    </select>
                    <textarea value={cachedWidget.text} className="form-control" id = 'ta1' onChange={
                        (event) => {
                            let value = document.getElementById("ta1");
                            console.log('cachedWidgetVVV', value);
                            setCachedWidget({
                                ...widget, text: event.target.value
                            })
                        }
                    }
                    ></textarea>
                </>
            }
            {
                !editingStatus &&
                <>
                    <i onClick={() => setEditingStatus(true)} className="fas fa-2x fa-cog float-right"></i>
                    <p>
                        {widget.text}
                    </p>
                </>
            }
        </>
    )
}

export default ParagraphWidget