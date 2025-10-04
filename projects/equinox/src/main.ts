import { CellShaderResources } from "./res/cell.res";
import { SuzanneShaderResources } from "./res/suzanne.res";
import { WireframeShaderResources } from "./res/wireframe.res";
import { cellWatcherAPI } from "./api/cell-updater.api";
import { Engine } from "./objects/engine";
// import "./style.scss";
import "./style.css";

function initAppResources(){
    var cellShaderContainer = CellShaderResources.getInstance();
    var suzanneShaderContainer = SuzanneShaderResources.getInstance();
    var wireframeShaderContainer = WireframeShaderResources.getInstance();

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
    cellWatcherAPI.initWebsocketClient();
}

main();