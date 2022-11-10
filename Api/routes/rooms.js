import express from 'express';
import { 
    createRoom, 
    deleteRoom, 
    getAllRoom, 
    getOneRoom, 
    updateRoom,
    updateRoomAvailability,
} from '../controllers/room-controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/:hotelid" ,verifyAdmin, createRoom);

router.put("/:id" ,verifyAdmin, updateRoom);

router.put('/availability/:id', updateRoomAvailability);

router.delete("/:id/:hotelid" ,verifyAdmin, deleteRoom);

router.get("/:id" , getAllRoom);

router.get("/:id" , getOneRoom);


export default router;