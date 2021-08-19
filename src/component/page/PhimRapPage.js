import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './home.css'
import Pagination from './Pagination'
const PhimRapPage = () => {

    const context=useContext(GlobalContext)
    const [phimrap]=context.phim.phimRap
    return (
        <div className='main-page'>
           
                {
                    
                    <Pagination phim={phimrap}/>
                }
        </div>
    )
}

export default PhimRapPage