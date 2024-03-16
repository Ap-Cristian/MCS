import express from 'express';
import { APP_ENV } from './app-env';
import { CellRouter } from '../routes/default-cube.route'

let app: express.Application;
export async function initEqnx(): Promise<express.Application | undefined> {
    if (app) return app;

    app = express();
    const port = APP_ENV.PORT;

    app.use(APP_ENV.DEFAULT_CELL_ENDPOINT, CellRouter);

    return app;
}