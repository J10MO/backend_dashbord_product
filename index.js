const express = require("express");
const app = express();
const admin = require("./ROUTER/admin");
const users = require("./ROUTER/users");
const prodect = require("./ROUTER/products");
const order = require("./ROUTER/orders");
const checkAuth = require("./middleware/middleware");

const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", admin);
app.use("/api/v1", checkAuth, prodect);
app.use("/user", users);
app.use("/order", order);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
