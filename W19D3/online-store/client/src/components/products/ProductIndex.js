import React from "react";
import { Query } from "react-apollo";
import { FETCH_PRODUCTS, IS_LOGGED_IN } from "../../graphql/queries";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const ProductIndex = () => {
  return (
  <Query query={FETCH_PRODUCTS}>
    {({ loading, error, data: product_data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <Query query={IS_LOGGED_IN}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            let createProduct;

            if (data.isLoggedIn) {
              createProduct = <CreateProduct />;
            }

            return (
              <ul>
                { createProduct }
                {product_data.products.map(product => (
                  <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
              </ul>
            );
          }}
        </Query>
      )
    }}
  </Query>
);
};

export default ProductIndex;
