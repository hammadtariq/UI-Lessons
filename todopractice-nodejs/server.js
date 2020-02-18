const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const db = "mongodb://localhost/Nodejsapp";

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("connected to mongoDb database..."))
  .catch(err => console.log("Database Connection Error" + err));

app.use("/api/todo", require("./routes/todo"));

// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = 4000;
app.listen(port, () => console.log("server is started"));
