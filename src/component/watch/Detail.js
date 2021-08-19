import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext';
import './detail.css'
import ReactPaginate from "react-paginate";
const Detail = () => {
    const { id } = useParams()
    const context = useContext(GlobalContext);
    const [phimBo] = context.phim.phimBo
    const [phimLe] = context.phim.phimLe
    const [wath, setWatch] = useState([])
    const [phimRap] = context.phim.phimRap
    const [phimHoatHinh] = context.phim.phimHoatHinh
    const [detail, setDetail] = useState([])
    const [tapNumber, setTapNumber] = useState(0)
    const tapPage = 1;
    const tapVisited = tapNumber * tapPage;


    const pageCount = Math.ceil(wath.length / tapPage);
    const changePage = ({ selected }) => {
        setTapNumber(selected)
    }

    const getDetail = () => {
        const movieurl = []
        phimBo.forEach(p => {

            if (p.imageUrl.slice(58, 75) === id) {
                setDetail(p)
                p.episode.forEach(i => {
                    movieurl.push(i.url)
                    setWatch(movieurl)

                })
              

            }
            
           
        });
        phimRap.forEach(p => {
            if (p.imageUrl.slice(58, 75) === id) {
                setDetail(p)
                p.episode.forEach((i, index) => {
                    movieurl.push(i.url)

                    setWatch(movieurl)
                })
            }
        });
        phimLe.forEach(p => {
            if (p.imageUrl.slice(58, 75) === id) {
                setDetail(p)
                p.episode.forEach(i => {
                    movieurl.push(i.url)

                    setWatch(movieurl)
                })
            }
        });
        phimHoatHinh.forEach(p => {
            if (p.imageUrl.slice(58, 75) === id) {
                setDetail(p)
                p.episode.forEach(i => {
                    movieurl.push(i.url)

                    setWatch(movieurl)
                })
            }
        });
    }
  
    useEffect(() => {
        getDetail()
     

    }, [phimBo, phimHoatHinh, phimLe, phimRap])
    const displayMovie = wath.slice(tapVisited, tapVisited + tapPage).map((item, i) => {

        return (
            <iframe src={item} title={detail.title} allowFullScreen key={i}></iframe>
        )
    })
    return (
        <>
            <div className='detail' >
                <div className='img-container'>
                    <img src={detail.imageUrl} alt='' />

                </div>
                <div className='box-detail'>

                    <h2>{detail.title}</h2>
                    <h5>Số tập : {pageCount}</h5>
                    <h5>Thể loại : {detail.category}</h5>
                    {/* <iframe src={wath[index]} title={detail.title} allowFullScreen ></iframe> */}
                    {
                        displayMovie
                    }


                </div>
                <div className='pagination'>
                    <div className='h3'>
                        <h3>Chọn tập phim </h3>
                    </div>

                    <ReactPaginate
                        previousLabel={"Trở lại"}
                        nextLabel={"Tiếp theo"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>



            </div>
          
        </>
    )
}

export default Detail
