import React,{useContext} from 'react'
import Pagination from './Pagination'

import { GlobalContext } from '../../GlobalContext'
const PhimLePage = () => {
    const context=useContext(GlobalContext)
    const [phimle]=context.phim.phimLe
    return (
        <div className='main-page'>
          
                {
                    
                    <Pagination phim={phimle}/>
                }
        </div>
    )
}

export default PhimLePage
