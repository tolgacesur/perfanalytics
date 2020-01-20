import express, { Application } from 'express'
import { NextHandleFunction } from 'connect';
import mongoose from 'mongoose';

export default class App {
    public app: Application;
    public port: number;

    constructor(config: { port: number; middlewares: NextHandleFunction[]; routes: Routes, database: DatabaseConfig}) {
        this.app = express();
        this.port = config.port;

        this.connectDatabase(config.database);
        this.middlewares(config.middlewares);
        this.routes(config.routes);
        this.assets();
    }

    private connectDatabase(config: DatabaseConfig): void {
        mongoose.connect(`mongodb://${config.host}:${config.port}/${config.name}`, { useNewUrlParser: true });
    }

    private middlewares(middlewares: NextHandleFunction[]): void {
        middlewares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(routes: Routes): void {
        this.app.use('/', routes.root);

        for (const prefix in routes.others) {
            const route = routes.others[prefix];
            this.app.use(`/${prefix}`, route);
        }
    }

    private assets(): void {
        this.app.use(express.static('public'));
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`App listening on ${this.port}`)
        });
    }
}

interface Routes {
    root : express.Router,
    others : {[prefix: string]: express.Router}
};
interface DatabaseConfig {
    name: string,
    host : string,
    port: string
};