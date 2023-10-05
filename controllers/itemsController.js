const Item = require("../models/itemsModel");

const mongoose = require("mongoose");

// get all items
const getItems = async (req, res) => {
  const items = await Item.find({}).sort({ createdAt: -1 });
  res.status(200).json(items);
};

// get one item
const getItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const item = await Item.findById(id);
  if (!item) {
    return res.status(404).json({ erorr: "No such item" });
  }
  res.status(200).json(item);
};

// create an item
const createItem = async (req, res) => {
  const { name, price, images, description, sizes, promotion, priceBefore, genderIsFemale, categoryName } =
    req.body;
  try {
    const item = await Item.create({
      name,
      price,
      images,
      description,
      sizes,
      promotion,
      priceBefore,
      genderIsFemale,
      categoryName,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item" });
  }
  const item = Item.findOneAndDelete({ _id: id });
  if (!item) {
    return res.status(400).json({ error: "No such item" });
  }
  res.status(200).json(item);
};

// update an item
const updateItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such item" });
  }
  const item = await Item.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!item) {
    return res.status(400).json({ error: "No such item" });
  }
  res.status(200).json(item);
};

module.exports = {
  getItems,
  createItem,
  getItem,
  deleteItem,
  updateItem,
};
