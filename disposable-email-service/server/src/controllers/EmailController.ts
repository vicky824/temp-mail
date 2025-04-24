import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

class EmailController {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    public async createMailbox(req: Request, res: Response): Promise<void> {
        try {
            const emailAddress = await this.emailService.generateEmailAddress();
            res.status(201).json({ emailAddress });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create mailbox' });
        }
    }

    public async fetchMessages(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        try {
            const messages = await this.emailService.getMessages(email);
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    }
}

export default EmailController;