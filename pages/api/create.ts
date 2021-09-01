// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
const mongoose = require("mongoose");

const Post = require("../../models/Post");

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
  let session = await getSession({ req });
  if (req.method == "POST") {
    const post = new Post({
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      author: req.body.author,
      content: req.body.content,
      tags: req.body.tags,
    });
    post
      .save()
      .then((data) => {
        res.status(201).json({
          info: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }
}
