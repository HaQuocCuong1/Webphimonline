import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
import UserPage from './UserPage'
const Topbar = ({ clickSearch,clickLoginPage }) => {
    const [isMenu, setIsMenu] = useState(false)


    return (
        <>
        <div className='topbar'>
            <div className='logo'>
                <Link to='/'>
                    <img src='video.svg' alt='' />
                    Phim Hay
                </Link>
            </div>
            <ul style={isMenu ? { top: '60px' } : { top: '-100%' }}  onClick={()=>setIsMenu(false)}>
                <li><Link to='/home'>Home</Link></li>
                <li ><Link to='/phimbo'>Phim bộ</Link></li>
                <li><Link to='/phimle'>Phim lẻ</Link></li>
                <li><Link to='/phimrap'>Phim chiếu rạp</Link></li>
                <li><Link to='/hoathinh'>Phim hoạt hình</Link></li>
                <li><Link to='#' onClick={()=>clickLoginPage()}><i className="far fa-user"/></Link></li>

            </ul>
            <div className='menu' onClick={() => setIsMenu(!isMenu)}

            >
                {
                    isMenu ? <i className="fas fa-times-circle" /> : <i className="fas fa-bars" />
                }


            </div>
            <div className='search-icon' style={isMenu ? {display: 'none'} : {display: "flex"}}>
                <Link to='#' onClick={() => clickSearch()}><i className="fas fa-search" /></Link>
            </div>
        </div>
           
        </>
    )
}

export default Topbar
