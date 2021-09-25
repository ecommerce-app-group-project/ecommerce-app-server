const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const product = require("./api/product");

const app = express();

//middleware
app.use(logger("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5000/",
  optionsSuccessStatus: 200,
};

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/products", product);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

//error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: req.app.get("env") === "development" ? error.stack : {},
  });
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
