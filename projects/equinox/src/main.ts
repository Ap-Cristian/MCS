import { CellShaderContainer } from "./containers/cell-shader.container";
import { EntryPoint } from "./entryPoint";
import { cellWatcherClient } from "./services/cell-updater-service";
import "./style.scss";

function initCellShaderResources(){
    var cellShaderContainer = CellShaderContainer.getInstance();
    cellShaderContainer.fetchData().then(()=>{
        resumeAfterResourceLoad();
    });
}

function resumeAfterResourceLoad(){
    var entryPoint = new EntryPoint();
}

export function main(){
    initCellShaderResources();
    cellWatcherClient.initWebsocketClient();
}