import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const CardPhim = ({ value }) => {
    
    const[mouse,setMouse]=useState(false)
    const mouseMove=()=>{
            setMouse(true)
        
    }
    const mouseLeave=()=>{
        setMouse(false)
      
    }
    return (
        <div className='card-phim' onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
            <img src={value.imageUrl} alt='' />
            <div className='info-phim' style={mouse ? {bottom: '0'} : {bottom : '-100%'}}>
                <h2>{value.title}</h2>
                <Link to={`/phim/${value.imageUrl.slice(58, 75)}`}>Xem phim</Link>
                <p>{value.category}</p>
            </div>


        </div>
    )
}

export default CardPhim
