import * as bodyParser from 'body-parser';
import cors from 'cors';

import App from './app';
import config from './config';
import WebRoutes from './routes/web';
import ApiRoutes from './routes/api';

const app = new App({
    port: config.port,
    routes: {
        root : WebRoutes,
        others : {
            api : ApiRoutes
        }
    },
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors()
    ],
    database : {
        name : config.database.name,
        host : config.database.host,
        port : config.database.port
    },
    staticFolder : 'public/dashboard'
});

app.listen();