import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('../.env') });
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import assetsRouter from "./server/assets-router.js";
import router from "./routes/collections-router.js";
import welcomeMsgModel from "./server/models/welcome.model.js";

import { connect } from "mongoose";
//const assetsRouter = require("./server/assets-router");

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once("open", () => { console.log("MongoDB database connection established successfully"); });
connection.on("error", (error) => { console.error("MongoDB connection error:", error); });

//Back end routes
app.use("/src", assetsRouter);
app.use("/", router);
app.listen(3000);
console.log("Server running at http://localhost:3000/");
//module.exports = app;
export default app;