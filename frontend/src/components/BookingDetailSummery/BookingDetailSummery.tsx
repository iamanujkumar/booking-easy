import { BanketsType } from "../../../../backend/src/VendorsType/BanquetType";

type Props = {
    checkIn: Date;
    checkOut: Date;
    numberOfNights: number;
    banquet: BanketsType
};

const BookingDetailSummry = ({checkIn, checkOut, numberOfNights, banquet}: Props)=>{
    return(
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
        <h2 className="text-xl font-bold">Your Booking Details</h2>
        <div className="border-b py-2 ">
            Location: 
            <div className="font-bold">{`${banquet.name}, ${banquet.city}, ${banquet.country}`}</div>
        </div>
        <div className="flex justify-between">
            <div>
                Check-in
                <div className="font-bold">{checkIn.toDateString()}</div>
            </div>
            <div>
                Check-out
                <div className="font-bold">{checkOut.toDateString()}</div>
            </div>
        </div>
        <div className="border-t border-b py-2">
            Total length of stay:
            <div className="font-bold">
                {numberOfNights} nights
            </div>
        </div>

        <div>
            Number of guest:
            <div className="font-bold">
                {numberOfNights} Guest
            </div>
        </div>

    </div>
    )

    
}

export default BookingDetailSummry;