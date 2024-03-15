
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "" ;

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