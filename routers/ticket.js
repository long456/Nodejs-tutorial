import express from 'express';
import { ticketController } from '../controllers/index.js'; 
const router = express.Router();

router.get('/', ticketController.getTicket);
router.post('/add', ticketController.addTicket);
export default router