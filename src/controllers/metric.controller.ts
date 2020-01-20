import { Request, Response } from 'express';
import Metric from '../models/metric.model';

export default class MetricController {

    public async saveMetric(req: Request, res: Response) {
        const {token, metrics} = req.body;

        if (!token || !metrics){
            return res.status(422).json(null);
        }

        metrics.token = token;

        await new Metric(metrics).save();

        return res.send(null);
    }

    public async getMetrics(req: Request, res: Response) {
        const {token} = req.params;

        if (!token){
            return res.status(422).json(null);
        }

        const allMetrics = await Metric.find({token});

        return res.json(allMetrics);
    }
}