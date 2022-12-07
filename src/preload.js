const { ipcRenderer, contextBridge} = require('electron')



const WINDOW_API  = {
    greet: 'hola mundo',
    preferencias: () => ipcRenderer.invoke("prefo")
}


contextBridge.exposeInMainWorld("api", WINDOW_API)