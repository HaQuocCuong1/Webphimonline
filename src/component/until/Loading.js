import React from 'react'
import './loading.css'
const Loading = () => {
    return (
        <div className="loading"
        style={{ color: "white"}}>

            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon stroke="yellow" strokeWidth="1" fill="none"
                points="20,1 40,40 1,40" />
               
            </svg>
            
        </div>
    )
}

export default Loading