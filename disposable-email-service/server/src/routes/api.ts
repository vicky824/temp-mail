import { Router } from 'express';
import EmailController from '../controllers/EmailController';

const router = Router();
const emailController = new EmailController();

// Route to create a new mailbox
router.post('/mailbox', emailController.createMailbox.bind(emailController));

// Route to fetch messages for a specific mailbox
router.get('/mailbox/:address/messages', emailController.getMessages.bind(emailController));

export default router;