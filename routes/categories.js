const express = require("express");

const {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory
} = require("../controllers/categoriesController");

const router = express.Router();

// GET all categories
router.get("/", getCategories);

// GET a single category
router.get("/:id", getCategory);

// POST an category
router.post("/", createCategory);

// DELETE an category
router.delete("/:id", deleteCategory);

module.exports = router;