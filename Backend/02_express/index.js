import express from "express";

const app = express();

app.use(express.json());

const hostname = "http://127.0.0.1:";
const port = 3000;

let userRepo = [];
let nxtId = 1;

app.get("/", (req, res) => {
  res.send("Welcome to my express server 1.0");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: nxtId++, username, password };
  userRepo.push(newUser);
  res.status(201).send(newUser);
});

app.get("/login", (req, res) => {
  res.send(userRepo);
});

app.post("/login", (req, res) => {
  res.send("Welcome to my login page!");
});

app.listen(port, () => {
  console.log(`Server running at port: ${hostname}${port}`);
});
