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
                    <input value={cachedWidget.text}
                           onChange={(event) => setCachedWidget(
                               {...cachedWidget, text: event.target.value}
                           )}
                           className="form-control"/>
                    <select value={cachedWidget.size}
                            onChange={(event) => {
                                setCachedWidget(
                                    {...cachedWidget, size: parseInt(event.target.value)}
                                )
                            }}
                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                    <select value={cachedWidget.type} className="form-control"
                            onChange = {(event) => setCachedWidget({
                                ...cachedWidget, type: event.target.value
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
                    <i onClick={() => {
                        setEditingStatus(true)
                        // console.log('see cachedWidget', typeof  cachedWidget.size);
                    }} className="fas fa-2x fa-cog float-right"></i>
                    {cachedWidget.size === 1 && <h1>{cachedWidget.text}</h1>}
                    {cachedWidget.size === 2 && <h2>{cachedWidget.text}</h2>}
                    {cachedWidget.size === 3 && <h3>{cachedWidget.text}</h3>}
                    {cachedWidget.size === 4 && <h4>{cachedWidget.text}</h4>}
                    {cachedWidget.size === 5 && <h5>{cachedWidget.text}</h5>}
                    {cachedWidget.size === 6 && <h6>{cachedWidget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget