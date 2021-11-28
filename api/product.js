const express = require("express");
const { getOne, create, update, deleteProd } = require("../db/queries");

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

function validId(req, res, next) {
  if (!isNaN(req.params.id)) {
    next();
  } else {
    const error = new Error("Invalid id");
    next(error);
  }
}

function validProductMiddleware(req, res, next) {
  if (validProduct(req.body)) {
    next();
  } else {
    const error = new Error("Invalid product");
    next(error);
  }
}

function getProductFromBody(body) {
  const { title, description, price, quantity, image } = body;
  //insert into DB
  const product = {
    title,
    description,
    price,
    quantity,
    image,
  };

  return product;
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

router.get("/:id", validId, async (req, res, next) => {
  const getProduct = await getOne(req.params.id);
  const product = await getProduct;
  if (product) {
    res.json(product);
  } else {
    next();
  }
});

router.post("/", validProductMiddleware, async (req, res) => {
  const product = getProductFromBody(req.body);
  const createProduct = await create(product);
  const id = await createProduct;
  res.json({
    id,
  });
});

router.put("/:id", validId, validProductMiddleware, async (req, res) => {
  const product = getProductFromBody(req.body);
  const updateProduct = await update(req.params.id, product);
  res.json({
    message: "updated",
  });
});

router.delete("/:id", validId, async (req, res) => {
  const deleteProduct = await deleteProd(req.params.id);
  res.json({
    message: "Product deleted!",
  });
});

module.exports = router;
