const WebSocket = require('ws');
const port = 9090;

console.log(`WebSocket Server is running\n >> Listning port [${port}]`)

const wss = new WebSocket.Server({
  port: port,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed.
  }
})

let timeId = 0

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    let msg = `[Server says] ${Date().toString()}`
    ws.send(msg);
  });

  ws.send('[Server says] Connected');
});

wss.on('open', function open() {
  let msg = `[connected] ${Date.now()}`
  console.log(mssg);
  ws.send(msg);
});




