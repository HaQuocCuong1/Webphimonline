import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Search = ({ value, handleSearch, onSubmit, phim,isPhim }) => {

    const [isWatch, setIsWatch] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
 

    return (

        <div className='search' style={isScroll || isWatch ? { top: '-100%' } : { top: '70px' }}>
            
            <input type='text'
                value={value}
                onChange={handleSearch}
                placeholder='Tiêu đề phim...'
            />
            <button onClick={() => onSubmit()}>Tìm kiếm</button>
           


            {
               
                
                phim.slice(0, 3).map((item) => (
                    <div className='card-search' key={item.imageUrl}>

                        <img src={item.imageUrl} alt='' width='100px' />
                        <div className='search-box'>
                            <h4>{item.title}</h4>
                            <h5>{item.category}</h5>
                            <h5><Link to={`/phim/${item.imageUrl.slice(58, 75)}`} onClick={() => setIsWatch(true)}>Xem phim</Link></h5>
                        </div>
                    </div>
                )) 
            
            }




            <div className='scroll-top'>
                <i className="fas fa-chevron-circle-up" onClick={() => setIsScroll(true)} />
            </div>
        </div>
    )
  
}

export default Search
