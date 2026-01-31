

import React, { useState } from 'react'

function counterApp() {
    const [count, setCount] = useState(0)
    const handleClick = (dau) => {
        if (dau === '+')
            setCount((pre) => pre + 1)
        else
            setCount((pre) => pre - 1)

    }
    return (
        <>
            <h1>Counter App</h1>
            <div className="body" style={{ width: 200, height: 100, backgroundColor: "pink" }}>
                <div className="wrap">
                    <h4 >Result: {count}</h4>
                    <button onClick={() => { handleClick('+') }}> + </button>
                    <button onClick={() => { handleClick('-') }}> - </button>
                </div>
            </div>


        </>
    )
}

export default counterApp