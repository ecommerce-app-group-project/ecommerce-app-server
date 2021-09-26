const express = require("express");
const { getOne, create } = require("../db/queries");

const router = express.Router();

const queries = require("../db/queries");

function validProduct(product) {
  return (
    typeof product.title === "string" &&
    product.title.trim() !== "" &&
    product.title.length > 3 &&
    !isNaN(product.price) &&
    product.price > 0 &&
    Number.isInteger(product.quantity) &&
    product.quantity >= 0
  );
}

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

router.post("/", async (req, res, next) => {
  if (validProduct(req.body)) {
    const { title, description, price, quantity, image } = req.body;
    //insert into DB
    const product = {
      title,
      description,
      price,
      quantity,
      image,
    };
    const createProduct = await create(req.body);
    const id = await createProduct;
    res.json({
      id,
    });
  } else {
    const error = new Error("Invalid product");
    next(error);
  }
});

module.exports = router;
