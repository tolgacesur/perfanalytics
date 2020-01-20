import * as express from 'express';
import MetricController from '../controllers/metric.controller';

const router = express.Router();
const metric = new MetricController();

router.post('/metrics', metric.saveMetric);
router.get('/metrics/:token', metric.getMetrics);

export default router;