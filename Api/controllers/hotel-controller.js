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

export const deleteHotel =  async (req,res,next) => {
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
        const getAllHotel = await Hotel.find(req.query);
        res.status(200).json({
        success: true,
        message: getAllHotel,
        })
    } catch (error) {
        next(error);
    }
}


export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({city: city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error);
    }
}


export const countByType = async (req,res,next) => {
    try {
    const hotelCount = await Hotel.countDocuments({type: "hotel"});
    const apartmentCount = await Hotel.countDocuments({type: "apartment"});
    const resortCount = await Hotel.countDocuments({type: "resort"});
    const villaCount =  await Hotel.countDocuments({type: "villa"});
    const cabinCount = await Hotel.countDocuments({type: "cabin"});
        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartment", count: apartmentCount },
            { type: "resort", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount },
        ]);
    } catch (error) {
        next(error);
    }
}
