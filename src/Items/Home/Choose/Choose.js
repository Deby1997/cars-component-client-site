
import React from 'react';

const Choose = () => {
  return (
    <div className=' my-5 bg-base-300 p-5'>
      <h1 className='text-2xl text-center text-red-600 font-bold'>Why Choose Us!</h1>
      <p className='text-center'><small>We are providing friendly service ,our service is the most fastest service,we provide 24/7 services,our products are certified and guarenteed product,we are doing business according to 15 years trusted service.</small></p>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/1189/1189112.png?w=740" alt="" />
            <p className='text-black'>Friendly Service</p>
          </div>
        </div>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/898/898356.png?w=740" alt="" />
            <p className='text-black'>Fast Service</p>
          </div>
        </div>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/747/747192.png?w=740" alt="" />
            <p className='text-black'>Guaranteed Products</p>
          </div>
        </div>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/17/17538.png?w=740" alt="" />
            <p className='text-black'>24/7 Services</p>
          </div>
        </div>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/855/855566.png?w=740" alt="" />
            <p className='text-black'>Certified Products</p>
          </div>
        </div>
        <div class="card w-96 text-neutral-content">
          <div class="card-body items-center text-center">
            <img height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/85/85181.png?w=740" alt="" />
            <p className='text-black'>Client Trust Us Over 15 Years</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;