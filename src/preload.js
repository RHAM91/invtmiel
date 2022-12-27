const { ipcRenderer, contextBridge} = require('electron')


const WINDOW_API  = {
    preferencias: () => ipcRenderer.invoke("get/preferencias"),
    send: (channel, data) =>{
        let validChannels = ['get/version', 'actualizacion_disponible']
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    },
    receive: (channel, func) => {
        let validChannels = ['version_app', 'actualizacion_disponible']
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args))
        }
    }
}


contextBridge.exposeInMainWorld("api", WINDOW_API)