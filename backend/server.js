const express = require("express");
const app = express();

const port = 8080;

app.use("/", (req, res) => {
  res.status(200).send({ message: "totul ok" });
});

app.listen(port, () => {
  console.log("apasa acceleratia, pana la podea");
});
