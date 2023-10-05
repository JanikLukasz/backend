const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sizes: {
      type: Object,
      required: true,
    },
    promotion: {
      type: Boolean,
      required: true,
    },
    priceBefore: {
      type: Number,
      required: function () {
        return this.promotion === true;
      }
    },
    genderIsFemale: {
      type: Boolean,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);
