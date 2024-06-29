import { CellShaderContainer } from "./containers/cell-shader.container";
import { SuzanneContainer } from "./containers/suzanne.container";
import { WireframeContainer } from "./containers/wireframe.container";

import { Engine } from "./engine";
import { cellWatcherClient } from "./services/cell-updater-service";

import "./style.scss";

function initAppResources(){
    var cellShaderContainer = CellShaderContainer.getInstance();
    var suzanneShaderContainer = SuzanneContainer.getInstance();
    var wireframeShaderContainer = WireframeContainer.getInstance();

    Promise.all([
        cellShaderContainer.fetchData(), 
        suzanneShaderContainer.fetchData(),
        wireframeShaderContainer.fetchData()
    ]).then(()=>{
        resumeAfterResourceLoad();
    })
}

function resumeAfterResourceLoad(){
    var simEngine = new Engine();
}

export function main(){
    initAppResources();
    cellWatcherClient.initWebsocketClient();
}