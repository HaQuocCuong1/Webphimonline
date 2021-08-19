import React from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const Button = ({listRef}) => {
    const onNext = () => {
        const slide = listRef.current
        slide.scrollLeft += slide.offsetWidth;
       
        if(slide.scrollLeft>=(slide.scrollWidth-slide.offsetWidth)){
          slide.scrollLeft=0;
        }
    
      }
      const onPrev = () => {
        const slide = listRef.current
        slide.scrollLeft -= slide.offsetWidth;
     
        if(slide.scrollLeft<=0){
          slide.scrollLeft=slide.scrollWidth;
        }
    
      }

 
     
    return (
        <>
           <button className='prev'>
                            <FaChevronLeft onClick={()=>onPrev()}/>
                    </button>
                    <button className='next'>
                            <FaChevronRight onClick={()=>onNext()}/>
                    </button>  
        </>
    )
}

export default Button
