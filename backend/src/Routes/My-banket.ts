import express,{Request,Response} from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import Banket, { BanketsType } from '../Models/Banket';
import verifyToken from '../middleware/auth';
import { body } from 'express-validator';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage:storage,
    limits:{
        fileSize: 5 * 1024 * 1024 //5MB
    }
})

router.post("/",
verifyToken,[
    body("name").notEmpty().withMessage('Name is required'),
    body("city").notEmpty().withMessage('City is required'),
    body("country").notEmpty().withMessage('country is required'),
    body("discription").notEmpty().withMessage('Discription is required'),
    // body("type").notEmpty().withMessage('Type is required'),
    body("prices").notEmpty().isNumeric().withMessage('Price is required'),
    // body("prices").notEmpty().withMessage('Prices is required').isNumeric().withMessage('Prices must be numeric'),
    body("facilities").notEmpty().withMessage('Facilities is required'),

],
upload.array("imageFiles",6), async(req:Request, res:Response)=>{
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newBanket:BanketsType = req.body;

        // yha cloudinary pe immage upload kiye h
        const uploadPromises = imageFiles.map(async(image)=>{
            const b64 = Buffer.from(image.buffer).toString("base64")
            let dataURI = "data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url;
        });

        const imageUrls = await Promise.all(uploadPromises);

        newBanket.imageUrls = imageUrls;
        newBanket.lastUpdated = new Date();
        newBanket.userId = req.userId;

        // yha new Banket ko database me save kiya
        const banket = new Banket(newBanket);
        await banket.save();

        res.status(201).send(banket);



    } catch (error) {
        console.log("Error creting bankets",error);
        res.status(500).json({message:"Something Went Wrong"});
    }
})

export default router;