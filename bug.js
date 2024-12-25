const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon bug: Server doesn't close gracefully
//The server will remain running even after you press Ctrl+C to stop it
//This happens because there is no proper cleanup logic to close the server gracefully
//The solution is to add a listener for the 'close' event to handle the cleanup