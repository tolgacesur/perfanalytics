import { Request, Response } from 'express';
import Metric from '../models/metric.model';

export default class MetricController {

    public async saveMetric(req: Request, res: Response) {
        const {token, metrics, url} = req.body;

        // TODO : Check if token exists
        if (!token || !metrics){
            return res.status(422).json();
        }

        const data = {
            token,
            url,
            data : metrics
        };

        try {
            await new Metric(data).save();
        } catch (error) {
            console.log(error);
        }

        return res.send();
    }

    public async getMetrics(req: Request, res: Response) {
        const {token} = req.params;

        // TODO : Check if token exists
        if (!token){
            return res.status(422).json();
        }

        let allMetrics = [];

        try {
            allMetrics = await Metric.find({token});
        } catch (error) {
            console.log(error);
        }

        return res.json(allMetrics);
    }
}