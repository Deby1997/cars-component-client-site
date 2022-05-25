import React from 'react';
import Banner from './Banner';
import Choose from './Choose/Choose';
import Feedback from './Feedback';
import Footer from './Footer';
import Offer from './Offer';
import Services from './Products/Services';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Offer></Offer>
      <Choose></Choose>
      <Review></Review>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;