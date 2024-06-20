import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker"
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
    banquetId: string;
    prices: number;
}

type GuestInfoFormData = {
    checkIn: Date;
    checkOut: Date;
}

const GuestInfoForm = ({banquetId, prices}: Props) =>{
    const search = useSearchContext();
    const {isLoggedIn} = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();

    const { 
        watch, handleSubmit, setValue
    } = useForm<GuestInfoFormData>({
        defaultValues: {
            checkIn : search.checkIn,
            checkOut: search.checkOut,

        }
    });

    const checkIn = watch("checkIn");
    const checkOut = watch("checkOut");
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear()+1);


    const onSignInClick = (data: GuestInfoFormData)=>{
        search.saveSearchValues("", data.checkIn,data.checkOut);
        navigate("/sign-in",{ state: {from:location}})
    }

    const onSubmit = (data: GuestInfoFormData)=>{
        search.saveSearchValues("", data.checkIn,data.checkOut);
        navigate(`/banquet/${banquetId}/booking`)
    }


    return(
        <div className="flex flex-col p-4 bg-blue-200 gap-4">
            <h3 className="text-md font-bold">{prices}</h3>
            <form onSubmit={isLoggedIn? handleSubmit(onSubmit): handleSubmit(onSignInClick)}>
                <div className="grid grid-cols-1 gap-4 items-center">
                    <div>
                    <DatePicker
                      required
                      selected={checkIn}
                      onChange={(data)=> setValue("checkIn",data as Date)}
                      startDate={checkIn}
                      endDate={checkOut}
                      minDate={minDate}
                      maxDate={maxDate}
                      placeholderText="Check-in Date"
                      className="min-w-full bg-white p-2 focus:outline-none"
                      wrapperClassName="min-w-full"
                    />       
                    </div>

                    <div>
                    <DatePicker
                      required
                      selected={checkOut}
                      onChange={(data)=> setValue("checkOut",data as Date)}
                      startDate={checkIn}
                      endDate={checkOut}
                      minDate={minDate}
                      maxDate={maxDate}
                      placeholderText="Check-Out Date"
                      className="min-w-full bg-white p-2 focus:outline-none"
                      wrapperClassName="min-w-full"
                    />       
                    </div>

                    {
                        isLoggedIn? (
                        <button 
                        className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500 text-xl">
                            Book Now
                        </button>) : 
                        
                        (<button className="bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500 text-xl">Sign in to book</button>)
                    }
                </div>
            </form>
        </div>
    )

}

export default GuestInfoForm