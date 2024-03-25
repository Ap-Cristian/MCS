export class cellWatcherClient{
    private static ws:WebSocket;

    private static onConnected(){
        console.log("WEBSOCKET CONNECTED");
    }
    private static onConnectionClosed(){
        console.log("WEBSOCKET DISCONNECTED");
    }
    private static onMessageReceived(){
        console.log("PAGE SHOULD REFRESH");
        window.location.reload();
    }

    public static initWebsocketClient(){
        this.ws = new WebSocket("ws://localhost:3333");

        this.ws.addEventListener("open", this.onConnected);
        this.ws.addEventListener("close",this.onConnectionClosed);
        this.ws.addEventListener("message",this.onMessageReceived);
    }
}
