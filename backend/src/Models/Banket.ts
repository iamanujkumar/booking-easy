import mongoose from "mongoose";

export type BanketsType = {
    _id:string;
    userId:string;
    name:string;
    city:string;
    country:string
    description:string;
    facilities:string[];
    starRating:string;
    prices:string;
    owner:string;
    imageUrls:string[];
    lastUpdated:Date;
}

const banketSchema = new mongoose.Schema<BanketsType>({
    userId:{type: String, required:true},
    name:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, required:true},
    description:{type:String, required:true},
    facilities:[{type:String, required:true}],
    starRating:{type:String, required:true},
    prices: [{ type: String, required: true }],
    owner:{type:String, required:true},
    imageUrls:[{type:String, required:true}],
    lastUpdated:{type:Date, required:true},
})

const Banket = mongoose.model<BanketsType>("Banket",banketSchema);
export default Banket;