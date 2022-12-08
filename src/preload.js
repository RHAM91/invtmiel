const { ipcRenderer, contextBridge} = require('electron')


const WINDOW_API  = {
    preferencias: () => ipcRenderer.invoke("get/preferencias"),
    guardar_token: (token) => ipcRenderer.send('save_token', token)
}


contextBridge.exposeInMainWorld("api", WINDOW_API)