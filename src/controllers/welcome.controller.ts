import { Request, Response } from 'express';
import path from 'path';

const __basedir = path.join(__dirname, '../../');

export default class WelcomeController {

    public index(req: Request, res: Response) {
        return res.sendFile(path.join(__basedir, 'public/dashboard/index.html'));
    }
}