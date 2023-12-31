const express = require("express");
const ConnectToMongo = require("./moongose");
const path = require("path");

const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

var uri =
  "mongodb+srv://complaint:complaint@cluster0.tiegqro.mongodb.net/complaint?retryWrites=true&w=majority";

ConnectToMongo(uri);

app.use("/auth", require("./routes/auth"));
app.use("/complaint", require("./routes/complaint"));

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("server is listiening on server 5000");
});
