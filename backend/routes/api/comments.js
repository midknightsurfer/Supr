const express = require("express");
const asyncHandler = require("express-async-handler");
const { Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    console.log(req.path)
    const comments = await Comment.findAll({
      where: { imageId: req.params.id }
    });

    res.json(comments);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const upload = await Comment.create(req.body);
    const comment = await Comment.findByPk(upload.id);
    res.json(comment);
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    await comment.destroy();
    res.status(202).end();
  })
);

module.exports = router;