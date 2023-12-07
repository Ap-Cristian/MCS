import { initEqnx } from "./app-module/app";
import { APP_ENV } from "./app-module/app-env";

initEqnx().then((app)=>{
    app?.listen(APP_ENV.PORT, () => {
        console.log(`Example app listening on port ${APP_ENV.PORT}`);
    })
}).catch(err => console.log(err));