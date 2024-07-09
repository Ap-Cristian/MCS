import { initAppHttp, APP_PROTOCOL_HTTP } from "./app-module/app-http";
import { initCellWebSocket } from "./app-module/app-ws";
import { APP_ENV } from "./app-module/app-env";
import { cellWatcher } from "./cell-refresher/shader-watcher/watcher";
import { getCurrentDateAndTimeToString } from "./misc/time";

console.log('\n');
initAppHttp().then((app) => {
    app?.listen(APP_ENV.PORT_HTTP, () => {
        console.log(`[${getCurrentDateAndTimeToString()}]` +
            `[${APP_ENV.APP_NAME + " " + APP_PROTOCOL_HTTP}]` +
            ` Listening on port ${APP_ENV.PORT_HTTP}`);
    })

}).catch(err => console.log(err));

initCellWebSocket();
cellWatcher.startWatching();