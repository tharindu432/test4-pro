const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
//64PR3rLcJX5fXV3V
const connectDB = async () => {
  //mongodb+srv://tharinduchaturanga432:tharuu@cluster0.rq4mgxz.mongodb.net/?retryWrites=true&w=majority
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ishaniabeysinghe2000:yr7lu59c8Nys3uUp@cluster0.ki3zpnd.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

connectDB();
module.exports = connectDB;

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
