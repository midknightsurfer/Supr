const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Image, Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();

    res.json(images);
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const image = await Image.findByPk(req.params.id);

    res.json(image);
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const image = await Image.findByPk(req.params.id);
    await image.destroy();
    res.status(202).end();
  })
);

router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { description } = req.body;
    console.log(description)
    const imageToUpdate = await Image.findByPk(req.params.id);

    await imageToUpdate.update({
      description,
    });


    res.json(imageToUpdate);
  })
);

module.exports = router;