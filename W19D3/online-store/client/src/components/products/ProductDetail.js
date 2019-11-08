import React from "react";
import { Query } from "react-apollo";
import { FETCH_PRODUCT } from "../../graphql/queries";
import { Link } from 'react-router-dom';


const ProductDetail = (props) => {
  return (
    <Query query={FETCH_PRODUCT} variables={{id: props.match.params.id}}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        
        let {product} = data;
        return (
          <div>
            <h4>{product.name}</h4>
            <p>{product.weight} lbs</p>
            <p>{product.description}</p>
            <Link to="/">Home</Link>
          </div>
        )
      }}
    </Query>
  )
};

export default ProductDetail;