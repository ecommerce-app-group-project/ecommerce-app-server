const express = require("express");
const { getOne } = require("../db/queries");

const router = express.Router();

const queries = require("../db/queries");

// /api/v1/products

router.get("/", async (req, res, next) => {
  try {
    const getProducts = await queries.getAll();
    const products = await getProducts;
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  if (!isNaN(req.params.id)) {
    const getProduct = await getOne(req.params.id);
    const product = await getProduct;
    if (product) {
      res.json(product);
    } else {
      next();
    }
  } else {
    const error = new Error("Invalid id");
    next(error);
  }
});

module.exports = router;
