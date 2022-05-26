import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ service }) => {
  const { _id, name, price, img, description } = service;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/items/${id}`);
  }
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
            <button onClick={() => navigateToProductDetail(_id)} class="btn btn-outline btn-accent">Product Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;