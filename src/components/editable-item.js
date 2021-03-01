import React, {useState} from 'react'

const EditableItem = (
    {item={title:'hhh', _id:'123'},
        deleteItem = () => alert('delete item why?'),
        updateItem = () => alert('update item')}) => {

    // state hook
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing && <>
                    <a className='nav-link' href='#'>
                        {item.title}
                    </a>
                    <i onClick={() => setEditing(true)} className='fas fa-edit'></i>
                </>
            }
            {
                editing && <>
                    <input onChange={
                        (event) => setCachedItem({...cachedItem, title: event.target.value})
                    } value={cachedItem.title} className='input'/>
                    <i onClick={() => {
                        updateItem(cachedItem)
                        setEditing(false)
                    }} className='fas fa-check'></i>
                    <i onClick={() => {
                        deleteItem(item)
                        setEditing(false)
                    }} className='fas fa-times'></i>
                </>
            }
        </>
    )
}

export default EditableItem