import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.get("/", (req, res) => {
  return res.sendFile(__dirname, "../../frontend/build/index.html");
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
