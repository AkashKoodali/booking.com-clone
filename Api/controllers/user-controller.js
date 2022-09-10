import User from '../models/User.js';

export const deteteUser =  async (req,res,next) => {
    const {id} = req.params;
    try {
        await User.deleteOne({_id: id});
        res.status(200).json({
        success: true,
        message: "User deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}

export const updateUser =  async (req, res,next) => {

    const { id } = req.params;
    const { data } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
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
                data: updatedUser,
            }); 
    } catch (error) {
        next(error);
    }
    
    
}

export const getOneUser = async (req,res,next) => {
    const {id} = req.params;
    try {
        const singleUser = await User.findById({_id: id});
        res.status(200).json({
        success: true,
        message: singleUser,
        })
    } catch (error) {
        next(error);
    }
}

export const getAllUser = async (req,res,next) => {
    try {
        const getAllUser = await User.find();
        res.status(200).json({
        success: true,
        message: getAllUser,
        })
    } catch (error) {
        next(error);
    }
}

