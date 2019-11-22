const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("./models/db.js");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.redirect(`https://proxy-kikstarter.herokuapp.com/?id=${id}`);
});

app.get("/", (req, res) => {
  ProjectDB.Project.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
