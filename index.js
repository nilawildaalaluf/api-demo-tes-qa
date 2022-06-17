var express = require("express");
var app = express();
const router = express.Router();
const PORT = process.env.PORT || 5050;
const { books } = require("./handlers/books");

router.get("/books", books);

router.get("/", (req, res) => {
  res.send("This is my demo project");
});

// app.use("/books", books);

// module.exports.handler = serverless(app);

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
