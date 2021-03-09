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
                        <i onClick={() => setEditing(true)}
                           className={`d-inline float-right editIconMargin fas fa-edit ${active? 'active' : ''} ${active? 'editIconColor' : 'editIconColorActive'}`}></i>
                    </Link>
                </>
            }
            {
                editing && <>
                    <input onChange={
                        (event) => {
                            // console.log('cachedItem',cachedItem)
                            // console.log('item',item)
                            // console.log('eventargetvalue', event.target.value)
                            setCachedItem({...item, title: event.target.value})
                            // console.log('cachedItemAfter',cachedItem)
                            // console.log('itemAfter',item)
                        }
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