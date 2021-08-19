import React from 'react'
import PhimLe from '../phimRap/PhimLe'
import PhimRap from '../phimRap/PhimRap'
import PhimBo from '../phimRap/PhimBo'
import PhimHoatHinh from '../phimRap/PhimHoatHinh'
import './home.css'


const Home = () => {
  


    return (
        <div className='home'>
          
            <PhimRap/>
            <PhimLe/>
            <PhimBo/>
            <PhimHoatHinh/>
        </div>
    )
}

export default Home
