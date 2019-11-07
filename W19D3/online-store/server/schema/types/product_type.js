const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLID
} = graphql;
const Category = mongoose.model("category");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: {
      type: require("./category_type"),
      resolve(parentValue) {
        return Category.findById(parentValue.category)
          .then(category => category)
          .catch(err => null);
      }
    },
    description: { type: GraphQLString },
    weight: { type: GraphQLFloat }
  })
});

module.exports = ProductType;