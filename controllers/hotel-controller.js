import Hotel from '../models/Hotel.js';

export const createHotel = async (req,res,next) => {
    const { data } = req.body;
    const newHotel = new Hotel(data); 
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

export const deteteHotel =  async (req,res,next) => {
    const {id} = req.params;
    try {
        await Hotel.deleteOne({_id: id});
        res.status(200).json({
        success: true,
        message: "Hotel deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}

export const updateHotel =  async (req, res,next) => {

    const { id } = req.params;
    const { data } = req.body;

    try {
        const updatedHotel = await Hotel.findOneAndUpdate(
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
                data: updatedHotel,
            }); 
    } catch (error) {
        next(error);
    }
    
    
}

export const getOneHotel = async (req,res,next) => {
    const {id} = req.params;
    try {
        const singleHotel = await Hotel.findById({_id: id});
        res.status(200).json({
        success: true,
        message: singleHotel,
        })
    } catch (error) {
        next(error);
    }
}

export const getAllHotel = async (req,res,next) => {
    try {
        const getAllHotel = await Hotel.find();
        res.status(200).json({
        success: true,
        message: getAllHotel,
        })
    } catch (error) {
        next(error);
    }
}

