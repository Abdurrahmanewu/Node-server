const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Node Server Running");
});

const users = [
  { id: 1, name: "Sam", email: "sabana@gmail.com" },
  { id: 2, name: "Sahbab", email: "sabnoor@gmail.com" },
  { id: 3, name: "Samia", email: "sabila@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(
      (usr) => usr.name.toLowerCase().indexOf(search) >= 0
    );
    res.send(filtered);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  // console.log("Post API Call");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Simple not server running on port ${port}`);
});
