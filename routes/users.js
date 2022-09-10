import express from 'express';
import 
{ 
    deteteUser, 
    getAllUser, 
    getOneUser, 
    updateUser 
} from '../controllers/user-controller.js';

import { verifyAdmin,verifyUser } from "../utils/verifyToken.js"

const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req,res,next)=> {
//     res.send("Hello user u r logged in..!")
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
//     res.send("Hello user u r logged in and you can delete your account..!")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
//     res.send("Hello admin u r logged in and you can delete all accounts..!")
// });


router.put("/:id",verifyUser, updateUser);

router.delete("/:id",verifyUser, deteteUser); 

router.get("/:id",verifyUser, getOneUser); 

router.get("/",verifyAdmin, getAllUser); 


export default router;