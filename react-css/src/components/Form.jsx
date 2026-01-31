import React, { useState } from 'react'

function Form() {
    const [infor, setInfor] = useState({ name: '', email: '' })

    const handleOnChange = (e, key) => {
        setInfor((pre) => ({ ...pre, [key]: e.target.value }));
    }
    return (
        <div>
            <form action="">
                <input placeholder='Name' type="text" onChange={(e) => { handleOnChange(e, "name") }} /> <br />
                <br/>
                <input placeholder='Email' type="text" onChange={(e) => { handleOnChange(e, "email") }} />
            </form>

            <h3>Name: {infor.name}</h3>
            <h3>Email: {infor.email}</h3>
        </div>
    )
}

export default Form