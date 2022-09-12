const http = require("http")

const server = http.createServer((req, res) => {
  res.end("Welcome to Devops");
});

server.listen(8000, "34.238.250.60", () => {
  console.log("listening to the port no 8000"); 
}); 
