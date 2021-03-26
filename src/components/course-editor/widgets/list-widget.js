import React, {useState} from 'react';

const ListWidget = () => {

    const [editing, setEditing] = useState(false);

    return (
        <div>
            {
                editing &&
                    <>
                        <input type = "checkbox"/> Ordered
                        <br/>
                        Item list
                        <textarea className='form-control'>

                        </textarea>
                    </>
            }
            {
                !editing &&
                    <>
                        <ul>
                            <li>123</li>
                            <li>234</li>
                            <li>321</li>
                            <li>432</li>
                        </ul>
                    </>
            }
        </div>
    )
}

export default ListWidget