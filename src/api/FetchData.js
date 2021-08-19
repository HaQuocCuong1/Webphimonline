
import { useEffect, useState } from 'react'

function FetchData() {
    const [phimBo,setPhimBo]=useState([])
    const [phimLe,setPhimLe]=useState([])
    const [phimchieurap,setPhimChieuRap]=useState([])
    const [phimHoatHinh,setPhimHoatHinh]=useState([])
    const[loading,setLoading]=useState(false)
    const getPhim= async()=>{
        try {
            setLoading(true)
            const res1=await fetch('data.json');
            const res=await res1.json()
                if(res.phim)
          {
                        setPhimBo(res.phim.phimbo)
                        setPhimLe(res.phim.phimle)
                        setPhimChieuRap(res.phim.phimchieurap)               
                        setPhimHoatHinh(res.phim.phimhoathinh)
                    
                
          }
          setLoading(false)
        } catch (err) {
            console.log(err)
        }
       
    }
    useEffect(()=>{
        getPhim()
       
    },[])

    return {
        phimBo : [phimBo,setPhimBo],
        phimLe: [phimLe,setPhimLe],
        phimRap: [phimchieurap,setPhimChieuRap],
        phimHoatHinh:[phimHoatHinh,setPhimHoatHinh],
        loading:[loading,setLoading]
    }
}
export default FetchData
