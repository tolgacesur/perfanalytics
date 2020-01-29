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
            return res.status(422).json();
        }

        return res.send();
    }

    public async getMetrics(req: Request, res: Response) {
        const {token} = req.params;
        let {start, end} = req.query;

        // TODO : Check if token exists
        if (!token){
            return res.status(422).json();
        }

        if ((start && !end )|| (!start && end)){
            return res.status(422).json();
        }

        // If start and end are not specified, fetch records from the last 30 minutes
        const now = new Date();
        start = start ? new Date(start * 1000) : new Date(now.setMinutes(now.getMinutes() - 30));
        end = end ? new Date(end * 1000) : new Date();

        let allMetrics = [];

        try {
            allMetrics = await Metric.find({token, createdAt: {$gte: start, $lte: end}});
        } catch (error) {
            console.log(error);
            return res.status(422).json();
        }

        return res.json(allMetrics);
    }
}