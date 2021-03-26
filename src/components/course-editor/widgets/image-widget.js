import React, {useState} from 'react';

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {

    const [editingStatus, setEditingStatus] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <div>
            {
                !editingStatus &&
                <>
                    <i onClick={() => setEditingStatus(true)} className="fas fa-2x fa-cog float-right"></i>
                    <img src={cachedWidget.src}
                         width ={cachedWidget.width}
                         height = {cachedWidget.height}
                    />
                </>
            }
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
                    <br/>
                    Image URL
                    <input onChange = {(event) => setCachedWidget({
                        ...cachedWidget, src: event.target.value
                    })}
                           value = {cachedWidget.src}
                           className='form-control'/>
                    Image Width
                    <input onChange = {(event) => setCachedWidget({
                        ...cachedWidget, width: event.target.value
                    })}
                           value = {cachedWidget.width}
                           className='form-control'/>
                    Image Height
                    <input onChange = {(event) => setCachedWidget({
                        ...cachedWidget, height: event.target.value
                    })}
                           value = {cachedWidget.height}
                           className='form-control'/>
                </>
            }
        </div>
    )
}

export default ImageWidget