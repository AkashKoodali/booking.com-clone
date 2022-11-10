import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
//import { createError } from "../utils/error.js";

export const createRoom = async (req,res,next) => {
    const  hotelid  = req.params.hotelid;
    const data  = req.body;
    const newRoom  = new Room(data);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $push:{
                
                    rooms: savedRoom._id
            },
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
} 

export const deleteRoom=  async (req,res,next) => {
    const hotelid = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json({
        success: true,
        message: "Roomd deleted successfully",
        });
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $pull:{
                    rooms: req.params.id
            },
            });
        } catch (error) {
            next(error);  
        }
    } catch (error) {
        next(error);
    }
}

export const updateRoom=  async (req, res,next) => {

    const { id } = req.params;
    const { data } = req.body;

    try {
        const updatedRoom = await Room.findOneAndUpdate(
            {
                _id: id,
            },
            data, 
            {
                new: true,
            }
            );
            
            return res.status(200).json({
                success: true,
                data: updatedRoom,
            }); 
    } catch (error) {
        next(error);
    }
    
    
}


export const updateRoomAvailability =  async (req, res,next) => {
    
    try {
        await Room.updateOne({"roomNumbers._id": req.params.id}, {
            $push:{
                "roomNumbers.$.unavailableDates": req.body.dates
            }
        });
        res.status(200).json('Room status has been updated.'); 
    } catch (error) {
        next(error);
    }
    
    
}

export const getOneRoom= async (req,res,next) => {
    const {id} = req.params;
    try {
        const singleRoom = await Room.findById({_id: id});
        res.status(200).json({
        success: true,
        message: singleRoom,
        })
    } catch (error) {
        next(error);
    }
}

export const getAllRoom= async (req,res,next) => {
    try {
        const getAllRoom= await Room.find();
        res.status(200).json({
        success: true,
        message: getAllRoom,
        })
    } catch (error) {
        next(error);
    }
}