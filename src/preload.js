const { ipcRenderer, contextBridge} = require('electron')


const WINDOW_API  = {
    preferencias: () => ipcRenderer.invoke("get/preferencias"),
    token_sesion: () => ipcRenderer.invoke("get/token_sesion"),
    guardar_token: (token) => ipcRenderer.send('save_token', token)
}


contextBridge.exposeInMainWorld("api", WINDOW_API)