import React, { useState } from 'react'
import PaginationReact from 'react-paginate'
import CardPhim from './CardPhim'
const Pagination = ({phim}) => {

    const [pageNumber,setPageNumber]=useState(0)
    const TotalItem=21;
    const MovieVisited=pageNumber*TotalItem;

    const disPlayMovie=phim.slice(MovieVisited,TotalItem+ MovieVisited).map((item,i)=>{
        return (
            <div className='phim-movie' key={i}>
                      <CardPhim  value={item}/>
            </div>
      
        )
    })

    const pageCount = Math.ceil(phim.length / TotalItem);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <>
            
            {
                disPlayMovie
            }
          <PaginationReact
              previousLabel={"Trở lại"}
              nextLabel={"Tiếp theo"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationPhim"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActivePhim"}
          
          />
        
        </>
    )
}

export default Pagination
