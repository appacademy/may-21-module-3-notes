const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');
const { url } = require('inspector');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }
  if (req.method === "GET" && req.url === "/") {
    const bodyView = fs.readFileSync("./views/new-player.html")
    res.setHeader("Content-Type", "text/html");
    return res.end(bodyView)
  }

    if (req.method === "POST" && req.url === "/player") {
      const [[__nameLabel, name], [__roomLabel, roomId]] = reqBody.split("&").map(formData => formData.split("="))

      const currentRoom = world.rooms[roomId]
      player = new Player(name, currentRoom)
      res.statusCode = 302;
      res.setHeader("Location", `/rooms/${Number(roomId)}`);
      res.end();
      return;
    }

    if (req.method === "GET" && /^\/rooms\/[1-5]$/.test(req.url)) {
      fs.readFile("./views/room.html", "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        let result = data
          .replace(/#{roomName}/g, player.currentRoom.name)
          .replace(/#{inventory}/g, player.inventoryToString())
          .replace(/#{roomItems}/g,  player.currentRoom.itemsToString())
          .replace(/#{exits}/g,  player.currentRoom.exitsToString())

        res.setHeader("Content-Type", "text/html");
        return res.end(result)
        })

    }

    if (req.method === "GET" && /^\/rooms\/[1-5]\/west|east|north|south$/.test(req.url)) {
      const [__empty,__rooms, __number, direction] = req.url.split("/")

      let nextRoom = player.move(direction.slice(0,1))
      res.statusCode = 302;

      res.setHeader("Location", `/rooms/${Number(nextRoom.id)}`);
      res.end();
      return;
    }

    if (req.method === "POST" && /^\/items\/[\d]\/drop|eat|take$/.test(req.url)) {

      const [__empty, __items, itemId, action] = req.url.split("/");
      const reloadPage = function () {
        res.statusCode = 302;
        res.setHeader("Location", `/rooms/${Number(player.currentRoom.id)}`);
        res.end();
        return;
      }
      switch (action) {
        case "take":
          player.takeItem(itemId)
          reloadPage();
          break;
        case "eat":
          player.eatItem(itemId);
          reloadPage();
          break;
        case "drop":
          player.dropItem(itemId);
          reloadPage();
          break;
        default:
          const errorPage = fs.readFile("./views/error.html")
          res.setHeader("Content-Type", "text/html");
          return res.end(errorPage)

      }
    }
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));