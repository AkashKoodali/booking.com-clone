import express from 'express';
import { 
    addHotel, 
    deteteHotel, 
    getAllHotel, 
    getOneHotel, 
    updateHotel 
} from '../controllers/hotel-controller.js';

const router = express.Router();

router.post("/", addHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deteteHotel); 

router.get("/:id", getOneHotel); 

router.get("/", getAllHotel); 


export default router;