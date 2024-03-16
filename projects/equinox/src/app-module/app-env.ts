export const APP_ENV = getAppEnv();

function getAppEnv(){
    return {
        PORT: 1024,
        DEFAULT_CELL_ENDPOINT:"/cell"
    }
}