
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "" ;
import {BanketsType} from '../../../backend/src/VendorsType/BanquetType'

export const addMyBanquet = async(banquetFormData:FormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/my-banket`,{
        method:"POST",
        credentials:"include",
        body:banquetFormData,

    });
    if(!response.ok){
        throw new Error("Failed to add Banquet");
    }
    return response.json();
};

export const fetchMyBankets = async(): Promise<BanketsType[]>=>{
    const response = await fetch(`${API_BASE_URL}/api/my-banket`,{
        credentials:"include"
    })
    if(!response.ok){
        throw new Error("Error fetching Bankets");
    }
    return response.json();
}