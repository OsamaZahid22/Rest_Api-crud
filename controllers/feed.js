const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  try {
    Post.find()
      .then((posts) => {
        res
          .status(200)
          .json({ message: "Fetched posts successfully", posts: posts });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.createPost = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed,entered data is incorrect. ");
      error.statusCode = 422;
      throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
      title: title,
      content: content,
      imageUrl: "images/profile.jpeg",
      creator: { name: "Osama" },
    });
    post
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Post created successfully!",
          post: result,
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getPost = (req, res, next) => {
  try {
    const postId = req.query.postId;
    Post.findById(postId)
      .then((post) => {
        if (!post) {
          res.status(404).json({ message: "Could not find post.", post: [] });
        }

        res.status(200).json({ message: "Post Fetched Successfully!!", post: post });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  } catch (error) {
    console.log("catch...");
    res.status(500).json({ message: error });
  }
};
