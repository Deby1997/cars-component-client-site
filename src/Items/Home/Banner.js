import React from 'react';
import car from '../../Images/car.jpg';

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${car})` }} class="hero min-h-screen mb-5" >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Go For The Best Ride</h1>
          <p class="mb-5">One of the best and trusted dealer.We are here to provide the best services.We deal with dealer with our car service products.</p>
          <button class="btn bg-gradient-to-r from-blue-700 to-blue-900">Get  Started</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;