import express from 'express';

import { APP_ENV } from './app-env';
import { CellRouter } from '../routes/default-cube.route'
import { SuzanneRouter } from '../routes/suzanne.route';
import { WireframeRouter } from '../routes/wireframe.route';

export const APP_PROTOCOL_HTTP = "HTTP";
let app: express.Application;

export async function initAppHttp(): Promise<express.Application | undefined> {
    if (app) return app;

    app = express();
    app.use(APP_ENV.DEFAULT_CELL_ENDPOINT, CellRouter);
    app.use(APP_ENV.DEFAULT_SUZANNE_ENDPOINT, SuzanneRouter);
    app.use(APP_ENV.WIREFRAME_ENDPOINT, WireframeRouter);

    return app;
}