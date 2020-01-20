import { Request, Response } from 'express';

export default class WelcomeController {

    public index(req: Request, res: Response) {
        // TODO : This endpoint will serve an html file for dashboard.
        return res.send('Hello World!');
    }
}