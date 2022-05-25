import React, { useEffect, useState } from 'react';
import Products from './Products';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div className='my-10'>
      <h1 className='text-3xl font-bold text-center text-blue-600'>Provided Products</h1>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-4 ml-10'>
        {
          services?.map(service => <Products
            key={service._id}
            service={service}
          ></Products>)
        }
      </section>
    </div>
  );
};

export default Services;