const server = require("./server/server");
require("dotenv").config();

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
