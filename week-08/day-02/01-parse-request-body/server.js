const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      // example: reqBody = "username=azure+green&password=password%21"
      req.body = reqBody
        .split("&") // ["username=azure+green", "password=password%21"]
        .map((keyValuePair) => keyValuePair.split("="))
        // [["username", "azure+green"], ["password", "password%21"]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        // [["username", "azure green"], ["password", "password%21"]]
        .map(([key, value]) => [key, decodeURIComponent(value)])
        // [["username", "azure green"], ["password", "password!"]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        // {
        //   username: 'azure green',
        //   password: 'password!'
        // }
      console.log(req.body);
    }
  });

  res.end('Hello World!');
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));