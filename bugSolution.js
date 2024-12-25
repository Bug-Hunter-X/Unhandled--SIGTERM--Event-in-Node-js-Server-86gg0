const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;

let isShuttingDown = false;

const shutdown = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Solution: Handle SIGTERM and SIGINT signals
//The solution is to add listeners for the 'SIGTERM' and 'SIGINT' events
//These events are triggered when the server receives a termination signal
//The listener should call the server.close() method to close the server gracefully
//The server.close() method is an asynchronous operation
//We set a flag isShuttingDown to prevent multiple calls to shutdown
//The process.exit(0) will finally exit the process after graceful shutdown.