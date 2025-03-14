const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(3000, () => {
  console.log(`Server running on port http://localhost:3000`);
});
