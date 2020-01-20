import * as express from 'express';
import WelcomeController from '../controllers/welcome.controller';

const router = express.Router();
const welcome = new WelcomeController();

router.get('/', welcome.index);

export default router;