const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: false
  }
});

ProductSchema.statics.updateProductCategory = (productId, categoryId) => {
  const Product = mongoose.model("product");
  const Category = mongoose.model("category");

  return Product.findById(productId).then(product => {
    if (product.category) {
      Category.findById(product.category).then(oldcategory => {
        oldcategory.products.pull(product);
        return oldcategory.save();
      });
    }
    return Category.findById(categoryId).then(newCategory => {
      product.category = newCategory.id;
      newCategory.products.push(product.id);

      return Promise.all([product.save(), newCategory.save()]).then(
        ([product, newCategory]) => product
      );
    });
  });
};

module.exports = mongoose.model("product", ProductSchema);