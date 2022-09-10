import express from 'express';
import { 
    createHotel, 
    deleteHotel, 
    getAllHotel, 
    getOneHotel, 
    updateHotel 
} from '../controllers/hotel-controller.js';

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel); 

router.get("/:id", getOneHotel); 

router.get("/", getAllHotel); 


export default router;