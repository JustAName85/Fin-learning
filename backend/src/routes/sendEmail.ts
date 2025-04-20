import express, { Router } from 'express';
import { sendEmailService } from '../service/sendEmailService';
const router: Router = express.Router();

router.post('/', sendEmailService);

export default router;
