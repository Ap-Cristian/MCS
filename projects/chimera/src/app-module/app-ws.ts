import WebSocket from 'ws';
import { APP_ENV } from './app-env';
import { getCurrentDateAndTimeToString } from '../misc/time';

const APP_PROTOCOL_WS = "WEBSOCKET";
let wss: WebSocket.Server;
let connected = false;
let activeConnection: WebSocket;

function onConnectionEstablished(sock: WebSocket) {
    console.log(`[${getCurrentDateAndTimeToString()}]` +
        `[${APP_ENV.APP_NAME} ${APP_PROTOCOL_WS}]` +
        ` Client connected... Waiting for shader changes.`);
    connected = true;
    activeConnection = sock;
}
function onConnectionClosed() {
    console.log(`[${getCurrentDateAndTimeToString()}]` +
        `[${APP_ENV.APP_NAME} ${APP_PROTOCOL_WS}] Client disconnected.`);
    connected = false;
}
export function sendCellRefreshSignal() {
    if (connected) {
        activeConnection.send("RFRSH");
    }
}
export function initCellWebSocket() {
    wss = new WebSocket.Server({ port: APP_ENV.PORT_WEBSOCKET })
    wss.on("connection", onConnectionEstablished);
    wss.on("close", onConnectionClosed);

    console.log(`[${getCurrentDateAndTimeToString()}]` +
        `[${APP_ENV.APP_NAME + " " + APP_PROTOCOL_WS}] Listening on port ${APP_ENV.PORT_WEBSOCKET}`);
}