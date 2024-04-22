import { CellShaderContainer } from "./containers/cell-shader.container";
import { Engine } from "./engine";
import { cellWatcherClient } from "./services/cell-updater-service";
import "./style.scss";

function initCellShaderResources(){
    var cellShaderContainer = CellShaderContainer.getInstance();
    cellShaderContainer.fetchData().then(()=>{
        resumeAfterResourceLoad();
    });
}

function resumeAfterResourceLoad(){
    var simEngine = new Engine();
}

export function main(){
    initCellShaderResources();
    cellWatcherClient.initWebsocketClient();
}