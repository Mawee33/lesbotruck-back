require("dotenv").config(); // parse .env file
require("./config/mongo");

const express = require("express"); // really needed
const server = express(); // create the server with the express function
const cors = require("cors"); // create the server with the express function

// we n eed to parse json body in HTTP requests
// this middleware exactly does that : )
server.use(express.json());

// authorize ajax call from specified clients
server.use(cors("*"));

server.get("/", (req, res) => { // setup a nase route ...
    res.send("ok"); // sending back a simple string as a response for each request on http://localhost:9000/
  });

  // ROUTING
const articlesRouter = require("./routes/articles");

server.use(articlesRouter);

server.listen(process.env.PORT, () => {
    console.log("backend started @ http://localhost:" + process.env.PORT)
});