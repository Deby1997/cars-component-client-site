import React from 'react';

const Products = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <p>{description}</p>
          <h2 class="card-title">Name:{name}</h2>
          <p>Price:${price}</p>
          <div class="card-actions">
            <button class="btn btn-outline btn-accent">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;