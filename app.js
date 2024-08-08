const express = require("express");
const httpStatus = require("http-status");

const port = 8080;

const app = express();

app.use(express.json({ limit: "16kb" }));

app.use("", (req, res) => {
  res.status(httpStatus.OK).send("<h1>Google App Engine Standard Home</h1>");
});

app.use("/v1", (req, res) => {
  res.status(httpStatus.OK).send("<h1>Google App Engine Standard V1</h1>");
});

app.on("error", (err) => {
  throw new Error(err.message);
});

app.use((req, res, next) => next(new Error("Route not found")));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
