import express from 'express';
import { createRoom } from '../controllers/room-controller.js';

const router = express.Router();

router.get("/:id" , createRoom);

export default router;