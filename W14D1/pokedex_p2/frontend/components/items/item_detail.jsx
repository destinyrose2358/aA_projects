import React from 'react'

const ItemDetail = ({item}) => {
  if (!item) return <p>Loading...</p>;
  return <div className="item-detail">
    <h1>{item.name}</h1>
    <p>Price: ${item.price}</p>
    <p>Happiness: {item.happiness}</p>
  </div>
};

export default ItemDetail;