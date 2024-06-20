import { BanquetSearchResponse } from "../../../backend/src/VendorsType/BanquetType";
import {BanketsType} from "../../../backend/src/VendorsType/BanquetType"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "" ;

export type SearchParams = {
    destination?: string;
    checkIn?: string;
    checkOut?: string;
    page?: string;
    facilities?:string[];
    stars?:string[];
    prices?:string;
    sortOption?:string;
};

export const searchBanquet = async (
    searchParams: SearchParams):Promise<BanquetSearchResponse> =>{
    const queryParams = new URLSearchParams();
    queryParams.append("destination", searchParams.destination || "");
    queryParams.append("checkIn", searchParams.checkIn || "");
    queryParams.append("checkOut", searchParams.checkOut || "");
    queryParams.append("page", searchParams.page || "");
    queryParams.append("prices", searchParams.prices || "")
    queryParams.append("sortOption", searchParams.sortOption || "")
    searchParams.facilities?.forEach((facility)=>
         queryParams.append("facilities",facility))
    searchParams.stars?.forEach((star)=>queryParams.append("stars",star))

    const responce = await fetch(`${API_BASE_URL}/api/banquets/search?${queryParams}`)

    if(!responce.ok){
        throw new Error("Error fetching banquets");
    }
    return responce.json();
}

export const fetchBanquetById = async(banquetId: string): Promise<BanketsType>=>{
    const responce = await fetch(`${API_BASE_URL}/api/banquets/${banquetId}`)
    if(!responce.ok){
        throw new Error("Error fetching Banquet");
    }
    return responce.json();
}