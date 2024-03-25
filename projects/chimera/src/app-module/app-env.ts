export const APP_ENV = getAppEnv();

function getAppEnv(){
    return {
        APP_NAME:"Chimera",
        APP_VERSION:"0.1.1",
        PORT_HTTP: 1024,
        DEFAULT_CELL_ENDPOINT:"/cell",
        PORT_WEBSOCKET: 3333
    }
}