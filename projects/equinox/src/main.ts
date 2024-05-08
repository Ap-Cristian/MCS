import { CellShaderContainer } from "./containers/cell-shader.container";
import { SuzanneContainer } from "./containers/suzanne.container";
import { cellWatcherClient } from "./services/cell-updater-service";
import { Engine } from "./engine";

import "./style.scss";

async function initAppResources(){
    var containerDataFetchPromises = [];

    var cellShaderContainer = CellShaderContainer.getInstance();
    var suzanneObjContainer = SuzanneContainer.getInstance();

    containerDataFetchPromises.push(cellShaderContainer.fetchData());
    containerDataFetchPromises.push(suzanneObjContainer.fetchData());

    await Promise.all(containerDataFetchPromises).then(()=>{
        resumeAfterResourceLoad();
    });
}

function resumeAfterResourceLoad(){
    var mcsEngine = new Engine();
}

export function main(){
    initAppResources();

    cellWatcherClient.initWebsocketClient();
}