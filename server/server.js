const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
require("./connection");

const Port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
