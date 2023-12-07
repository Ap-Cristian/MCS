import express from 'express';
import { APP_ENV } from './app-env';

let app: express.Application;
export async function initEqnx(): Promise<express.Application | undefined> {
    if (app) return app;

    app = express();
    const port = APP_ENV.PORT;

    app.get(APP_ENV.DEFAULT_CUBE_ENDPOINT, (req, res) => {
        res.send('Hello World!');
    })

    return app;
}