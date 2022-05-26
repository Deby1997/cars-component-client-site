import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/UseProductDetail';

const ItemsDetail = () => {
  const { itemId } = useParams();
  const [product] = useProductDetail(itemId);
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl m-auto">
        <figure class="px-10 pt-10">
          <img src={product.img} alt="items" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name:{product.name}</h2>
          <p>Price:${product.price}</p>
          <p>Available Quantity:{product.quantityavailable}</p>
          <p>Minimum Order Quantity:{product.quantityminimum}</p>
          <div class="card-actions">
            <button class="btn btn-info text-white">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetail;