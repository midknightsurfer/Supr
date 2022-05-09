const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Image } = require("../../db/models");

const router = express.Router();

const validateImage = [
  check("imageURL")
    .exists({ checkFalsy: true })
    .isURL()
    .withMessage("The provided image URL is invalid."),
  handleValidationErrors,
];

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

router.post(
  "/",
    asyncHandler(async (req, res) => {
    const upload = await Image.create(req.body);
    const image = await Image.findByPk(upload.id);
    res.json(image);
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
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
