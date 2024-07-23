import { useQuery } from "react-query";
import * as searchApiClient from "../../Api/SearchApi";
import * as userApiClient from "../../Api/userApi";
import BookingForm from "../../Form/BookingForm/BookingForm";
import { useSearchContext } from "../../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingDetailSummry from "../../components/BookingDetailSummery/BookingDetailSummery";


const BanquetBooking = () => {

    const search = useSearchContext();

    const {banquetId} = useParams();

    const [numberOfNights, setNumberOfNights] = useState<number>(0);

    useEffect(()=>{
      if(search.checkIn && search.checkOut){
        const nights = Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) / 
        (1000*60*60*24);

        setNumberOfNights(Math.ceil(nights))
      }
    }, [search.checkIn, search.checkOut]);

    const {data: banquet} = useQuery("fetchBanquetById", 
      ()=> searchApiClient.fetchBanquetById(banquetId as string),
      {
        enabled: !!banquetId,
      }
      
    )

    const {data: currentUser} = useQuery("fetchCurrentUser",userApiClient.fetchCurrentUser);

    if(!banquet){
      return <></>;
    }

  return (
    <div className="grid md:grid-cols-[1fr_2fr] m-4 mb-16">
      <BookingDetailSummry checkIn={search.checkIn} 
      checkOut={search.checkOut}
      numberOfNights={numberOfNights}
      banquet={banquet}
      />
      {currentUser && <BookingForm currentUser={currentUser}/> }
      
    </div>
  )
}

export default BanquetBooking
