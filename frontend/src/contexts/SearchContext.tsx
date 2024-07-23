import React, { useContext, useState } from "react";

type SearchContext = {
    destination: string;
    checkIn: Date;
    checkOut: Date;
    banquetId: string;
    saveSearchValues :(destination : string, checkIn:Date, checkOut:Date)=>void;
}

const SearchContext = React.createContext<SearchContext | undefined>(undefined);


type SearchContextProviderProps = {
    children: React.ReactNode;
}

export const SearchContextProvider = ({children}: SearchContextProviderProps) =>{
    const [destination, setDestination] = useState<string>(()=> sessionStorage.getItem("destination") || 
    "");
    const [checkIn, setCheckIn] = useState<Date>(()=> new Date(sessionStorage.getItem("checkIn") ||
    new Date().toISOString())
);
    const [checkOut, setCheckOut] = useState<Date>(()=> new Date(sessionStorage.getItem("checkOut") ||
    new Date().toISOString())
);
    const [banquetId, setBanquetId] = useState<string>(()=> sessionStorage.getItem("banquetId") || "");

    const saveSearchValues = (destination:string, checkIn:Date, checkOut:Date, banquetId?: string)=>{
        setDestination(destination);
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        if(banquetId){
            setBanquetId(banquetId);
        }
        sessionStorage.setItem("destination",destination);
        sessionStorage.setItem("checkIn",checkIn.toISOString());
        sessionStorage.setItem("checkOut",checkOut.toISOString());
        sessionStorage.setItem("destination",destination);

        if(banquetId){
            sessionStorage.setItem("banquetId", banquetId);
        }
        
    }
    return(
        <SearchContext.Provider value={{
            destination,
            checkIn,
            checkOut,
            banquetId,
            saveSearchValues,
        }}>
            {children}

        </SearchContext.Provider>
    )
}

export const useSearchContext = () =>{
    const context = useContext(SearchContext)
    return context as SearchContext;
}