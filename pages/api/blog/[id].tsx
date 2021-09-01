import { connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
const mongoose = require("mongoose");

const Post = require("../../../models/Post");

if (mongoose.connection.readyState != 1) {
  mongoose.connect(`${process.env.MONGO_URI}blogs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Database connection error:", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method == "GET") {
      const post = await Post.findById(req.query.id);
      res.json(post);
    }
  } catch (e) {
    res.status(404).json({
      error: e,
    });
  }
}
