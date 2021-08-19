import React,{useContext} from 'react'
import Pagination from './Pagination'
import { GlobalContext } from '../../GlobalContext'
const PhimLePage = () => {
    const context=useContext(GlobalContext)
    const [phimHH]=context.phim.phimHoatHinh
    return (
        <div className='main-page'>
               
                {
                    
                    <Pagination phim={phimHH}/>
                }
        </div>
    )
}

export default PhimLePage
