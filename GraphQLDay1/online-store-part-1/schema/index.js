const { makeExecutableSchema } = require("graphql-tools");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Category = mongoose.model("Category");
const Product = mongoose.model("Product");
const Order = mongoose.model("Order");

const typeDefs = `
  type User {
    _id: ID!
    email: String!
    orders: [Order]
  }
  type Product {
      _id: ID!
      name: String!
      description: String!
      category: Category
  }
  type Category {
      _id: ID!
      name: String!
      products: [Product]
  }
  type Order {
      _id: ID!
      products: [Product]
      user: User
  }
  type Query {
    categories: [Category]
  }
`;

const resolvers = {
  Query: {
    categories(_, __) {
      return Category.find({});
    }
  },
  User: {
    orders(parentValue, _) {
      const user = parentValue;
      return Order.find({ user: user._id });
    }
  },
  Category: {
    products(parentValue, _) {
        const category = parentValue;
        return Product.find({ category: category._id })
    }
  },
  Product: {
    category: async (parentValue, _) => {
      const product = await parentValue.populate("category").execPopulate();
      return product.category;
    }
  },
  Order: {
    user: async ( parentValue, _) => {
        const order = await parentValue.populate('user').execPopulate();
        return order.user;
    },
    products: async (parentValue, _) => {
        const order = await parentValue.populate('products').execPopulate();
        return order.products;
    }
  }  
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = {
  schema,
  typeDefs,
  resolvers
};