import { createContext} from "react";
import FetchData from "./api/FetchData";
export const GlobalContext=createContext()

export const DataProvider=({children})=>{
   

    const data={
        phim : FetchData()

    }
    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}
