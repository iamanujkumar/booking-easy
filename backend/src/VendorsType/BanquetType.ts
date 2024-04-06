export type BanketsType = {
    _id:string;
    userId:string;
    name:string;
    city:string;
    country:string
    description:string;
    facilities:string[];
    starRating:number;
    prices:number;
    owner:string;
    imageUrls:string[];
    lastUpdated:Date;
}