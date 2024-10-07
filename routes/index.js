import express from 'express';
import { login, sign } from '../controllers/mainController.js';

const router = express.Router();

router.get('/', login);
router.get('/sign', sign);

export default router;