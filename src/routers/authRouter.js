import { Router } from 'express';
import { login, validateToken } from '../controllers/authController';

const router = new Router();

router.post('/login', login);
router.post('/validateToken', validateToken);

export default router; 