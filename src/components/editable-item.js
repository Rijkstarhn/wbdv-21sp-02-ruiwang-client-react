import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({
        to='/somewhere/to/go',
        item={title:'hhh', _id:'123'},
        deleteItem = () => alert('delete item why?'),
        updateItem = () => alert('update item'),
        active}) => {
    // local state hook
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing && <>
                    <Link className={`nav-link ${active? 'active' : ''}`} to = {to}>
                        {item.title}
                    </Link>
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