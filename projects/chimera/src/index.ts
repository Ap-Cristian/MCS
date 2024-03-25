import { initCellHttp, APP_PROTOCOL_HTTP } from "./app-module/app-http";
import { initCellWebSocket } from "./app-module/app-ws";
import { APP_PROTOCOL_WS } from "./app-module/app-ws";
import { APP_ENV } from "./app-module/app-env";
import { cellWatcher } from "./cell-refresher/shader-watcher/watcher";

console.log('\n');
initCellHttp().then((app)=>{
    app?.listen(APP_ENV.PORT_HTTP, () => {
        console.log(`[${APP_ENV.APP_NAME + " " + APP_PROTOCOL_HTTP}] Listening on port ${APP_ENV.PORT_HTTP}`);
    })

}).catch(err => console.log(err));

initCellWebSocket();
cellWatcher.startWatching();