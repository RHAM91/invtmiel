const { ipcRenderer, contextBridge} = require('electron')


const WINDOW_API  = {
    preferencias: () => ipcRenderer.invoke("get/preferencias")
}


contextBridge.exposeInMainWorld("api", WINDOW_API)