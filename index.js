import express from 'express';
import { login, sign, resetPassword, editProfile } from '../controllers/mainController.js';

const router = express.Router();

router.get('/', login);
router.get('/sign', sign);
router.get('/resetPassword', resetPassword);
router.get('/editProfile', editProfile);

export default router;