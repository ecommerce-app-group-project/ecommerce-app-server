const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

// /api/v1/products

router.get("/", async (req, res) => {
  try {
    const getProducts = await queries.getAll();
    const products = await getProducts;
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
