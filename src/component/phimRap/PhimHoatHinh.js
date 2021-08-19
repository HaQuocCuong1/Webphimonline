import React, { useContext, useRef} from 'react'
import { GlobalContext } from '../../GlobalContext'
import Button from './Button';
import './landing.css'
import SlidePhimRap from './SlidePhimRap';
const PhimLe = () => {
    const context = useContext(GlobalContext);
    const [phimHoatHinh] = context.phim.phimHoatHinh
    const listRef =useRef()
 
   
     
    return (
        <div className='landing'>
           
            <h2 className='landing-title'>Phim hoạt hình mới nhất </h2>
            <div className='phimRap' ref={listRef}>
                {
                  
                    phimHoatHinh.slice(1,30).map((item, i) => (
                        <SlidePhimRap value={item} id={i} key={i} />
                    ))
                }



                <Button listRef={listRef}/>
            </div>
        </div>
    )
}

export default PhimLe