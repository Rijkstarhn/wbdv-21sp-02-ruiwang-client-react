import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
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
                    <input value={widget.text} className="form-control"/>
                    <select value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
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
                </>
            }
            {
                !editingStatus &&
                <>
                    <i onClick={() => setEditingStatus(true)} className="fas fa-2x fa-cog float-right"></i>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget