import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import *as apiClient from '../../Api/SearchApi'
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../../Form/GueseInfoForm/GuestInfoForm";

const BanquetDetail = () => {

    const {banquetId} = useParams();
    const {data:banquet} = useQuery(
        "fetchBanquetById",
        ()=> apiClient.fetchBanquetById(banquetId || ""),
        {
            enabled:!!banquetId,
        }
    )
    if(!banquet){
        return <></>;
    }

  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
            {Array.from({length: banquet.starRating}).map(()=>(
                <AiFillStar className="fill-yellow-400" />
            ))}
        </span>
        <h1 className="text-3xl font-bold">{banquet.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {banquet.imageUrls.map((image)=>(
          <div className="h-[300px]">
            <img src={image} alt={banquet.name}
             className="rounded-md w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {banquet.facilities.map((facility)=>(
          <div className="border border-slate-300 rounded-sm p-3">
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{banquet.description}</div>
      
      <div className="h-fit">
        <GuestInfoForm prices={banquet.prices} banquetId={banquet._id}/>
      </div>
      </div>


    </div>
  )
}

export default BanquetDetail;
