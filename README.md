# Node.js Server Graceful Shutdown Issue

This repository demonstrates a common issue in Node.js servers where the server doesn't gracefully shut down when interrupted.  The bug and solution are implemented in `bug.js` and `bugSolution.js`, respectively. This occurs because the server isn't properly handling the 'SIGTERM' (or similar) signal when trying to close the server.