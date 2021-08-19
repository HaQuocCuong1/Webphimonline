import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import './home.css'
import Pagination from './Pagination'
import PhimBo from '../phimRap/PhimBo'
const PhimBoPage = () => {

    const context=useContext(GlobalContext)
    const [phimbo]=context.phim.phimBo
    const [totalPhim,setTotalPhim]=useState([])
    const[phimtinhCam,setPhimTinhCam]=useState([])

    
    return (
        <>
             
        <div className='main-page'>
         
               
                {
                    
                    <Pagination phim={phimbo}/>
                }
        </div>
        </>
    )
}

export default PhimBoPage