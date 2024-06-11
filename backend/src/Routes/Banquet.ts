import express, { Request, Response } from 'express';
import Banket from '../Models/Banket';
import { BanquetSearchResponse } from '../VendorsType/BanquetType';

const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
    try {
        const query = constructSearchQuery(req.query);

        let sortOptions: any = {};
        switch (req.query.sortOption) {
            case "starRating":
                sortOptions = { starRating: -1 };
                break;
            case "pricesAsc":
                sortOptions = { prices: 1 };
                break;
            case "pricesDesc":
                sortOptions = { prices: -1 };
                break;
            default:
                sortOptions = {}; // Default to no sorting if no valid option is provided
                break;
        }

        const pageSize = 5;
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");

        const skip = (pageNumber - 1) * pageSize;

        const banquets = await Banket.find(query).sort(sortOptions).skip(skip).limit(pageSize);

        const total = await Banket.countDocuments(query); // Count documents matching the query
        const response: BanquetSearchResponse = {
            data: banquets,
            pagination: {
                total,
                page: pageNumber,
                pages: Math.ceil(total / pageSize),
            },
        };
        res.json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

const constructSearchQuery = (queryParams: any) => {
    let constructedQuery: any = {};

    if (queryParams.destination) {
        constructedQuery.$or = [
            { city: new RegExp(queryParams.destination, "i") },
            { country: new RegExp(queryParams.destination, "i") },
        ];
    }

    if (queryParams.facilities) {
        constructedQuery.facilities = {
            $all: Array.isArray(queryParams.facilities)
                ? queryParams.facilities
                : [queryParams.facilities],
        };
    }

    if (queryParams.stars) {
        const starRating = Array.isArray(queryParams.stars)
            ? queryParams.stars.map((star: string) => parseInt(star))
            : parseInt(queryParams.stars);

        constructedQuery.starRating = { $in: starRating };
    }

    if (queryParams.maxPrice) {
        constructedQuery.prices = {
            $lte: parseInt(queryParams.maxPrice),
        };
    }

    return constructedQuery;
};

export default router;
