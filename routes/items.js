const express = require("express");

const {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemsController");

const router = express.Router();

// GET all items
router.get("/", getItems);

// GET a single item
router.get("/:id", getItem);

// POST an item
router.post("/", createItem);

// DELETE an item
router.delete("/:id", deleteItem);

// UPDATE an item
router.patch("/:id", updateItem);

module.exports = router;
