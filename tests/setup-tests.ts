import dotenv from 'dotenv';
import path from 'path';
import * as bodyParser from 'body-parser';

import App from '../src/app';
import WebRoutes from '../src/routes/web';
import ApiRoutes from '../src/routes/api';

dotenv.config({path: path.resolve(__dirname, '../.env.test')});

const config = {
    port : parseInt(process.env.PORT),
    database : {
        name : process.env.DB_NAME,
        host : process.env.DB_HOST,
        port : process.env.DB_PORT
    }
};

export const app = new App({
    port: config.port,
    routes: {
        root : WebRoutes,
        others : {
            api : ApiRoutes
        }
    },
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ],
    database : {
        name : config.database.name,
        host : config.database.host,
        port : config.database.port
    }
});


export default app;