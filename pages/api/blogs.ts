// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
const mongoose = require("mongoose");

const Post = require("../../models/Post");

if (mongoose.connection.readyState != 1) {
  mongoose.connect("mongodb://localhost:27017/blogs", {
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
  let session = await getSession({ req });
  try {
    if (req.method == "GET") {
      const posts = await Post.find().skip(0).limit(10);
      res.json(posts);
    }
  } catch (e) {
    res.status(404).json({
      error: e,
    });
  }
}
