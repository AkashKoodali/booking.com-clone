import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";

export const createRoom = async (req,res,next) => {
    const { hotelid } = req.params;
    const { data } = req.body;
    const newRoom  = new Room(data);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $push: {
                    rooms: savedRoom._id
                }
            });
        } catch (error) {
            next(error);
        }
    } catch (error) {
        next(error);
    }
} 
