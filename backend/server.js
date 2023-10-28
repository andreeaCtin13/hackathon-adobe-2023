const express = require("express");
const app = express();

const port = 8080;

const router = require("./routes");

app.use(express.json());
app.use("/", router);

app.use("/", (req, res) => {
  res.status(200).send({ message: "totul ok" });
});

app.listen(port, () => {
  console.log("apasa acceleratia, pana la podea");
});
