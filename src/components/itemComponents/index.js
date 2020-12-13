import React from 'react';

const ItemComponents = ({ data }) => {
  console.log('product', data);
  return (
    <div>
      <p className="h1">{data.description}</p>
      <p>{data.name}</p>
      <p className="h2">
        Harga :
        {data.display_price}
      </p>
    </div>
  );
};

export default ItemComponents;
