const { ipcRenderer, contextBridge} = require('electron')


const WINDOW_API  = {
    preferencias: () => ipcRenderer.invoke("get/preferencias"),
    guardar_token: (token) => ipcRenderer.send('save_token', token),
    send: (channel, data) =>{
        let validChannels = ['save_token', 'get_token_', 'get_token']
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    },
    receive: (channel, func) => {
        let validChannels = ['get_token_', 'get_token']
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args))
        }
    }
}


contextBridge.exposeInMainWorld("api", WINDOW_API)