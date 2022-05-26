import { useEffect, useState } from "react";

const ProductDetail = (itemId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/items/${itemId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [itemId]);
  return [product, setProduct];
};

export default ProductDetail;