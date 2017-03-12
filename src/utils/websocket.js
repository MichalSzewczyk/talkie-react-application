const websocket = new WebSocket('wss://echo.websocket.org');

websocket.onopen = () => {
    console.log('WEBSOCKET OPENED')
}

websocket.onmessage = (...args) => {
    console.log('MESSAGE RECEIVED:', args)
}
websocket.onclose = () => {
    console.log('WEBSOCKET CLOSE')
    clearInterval(interval);
}
