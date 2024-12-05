// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Outfit from "./models/Outfit.js";
// import bodyParser from "body-parser";
// Load environment variables from .env file
dotenv.config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

// Initialize the Express application
const app = express();
// app.use(bodyParser.json());
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);
app.use(express.urlencoded({ extended: true }));

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.post("/outfitGallery", async (request, response) => {
  try {
    console.log(request.body);
    // recieve the incoming data for hat, Top, Bottom, shoes, outfitName
    const outfit = new Outfit(request.body);
    const data = await outfit.save();
    //response.status(200).send({});
    //write the data to the mongoDB database

    // return the saved outfits page?
    response.json(data);
  } catch (error) {
    response.status(500).send("failed to save clothing");
  }
});

app.get("/getOutfits", async (request, response) => {
  // look up all of the saved outfits
  // generate an HTML page to display them
  //const outfit = new Outfit();
  const data = await Outfit.find({});
  //console.log(all);
  //console.log(typeof all);
  response.json(data);
});

app.get("/deleteAll", async (request, response) => {
  const res = await Outfit.deleteMany({});
  console.log("Deleted all records.");
  response.send("Deleted all records");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
