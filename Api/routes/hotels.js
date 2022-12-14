import express from 'express';
import { 
    countByCity,
    countByType,
    createHotel, 
    deleteHotel, 
    getAllHotel, 
    getOneHotel, 
    updateHotel,
    getHotelRooms 
} from '../controllers/hotel-controller.js';

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel); 

router.get("/find/:id", getOneHotel); 

router.get("/", getAllHotel); 

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);


export default router;