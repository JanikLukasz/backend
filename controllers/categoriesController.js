const Category = require("../models/categoryModel");

const mongoose = require("mongoose");

// get all categories
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

// get one category
const getCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const category = await Category.findById(id);
  if (!category) {
    return res.status(404).json({ erorr: "No such item" });
  }
  res.status(200).json(category);
};

// create category
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({
      name,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete category
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const category = Category.findOneAndDelete({ _id: id });
  if (!category) {
    return res.status(400).json({ error: "No such item" });
  }
  res.status(200).json(category);
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
};
