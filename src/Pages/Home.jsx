import React from 'react';
import HomeContact from '../Components/HomeContact';
import HomeSectionTwo from '../Components/HomeSectionTwo';
import UncontrolledExample from '../Components/UncontrolledExample';
import WhyChooseUs from '../Components/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <UncontrolledExample />
      <HomeSectionTwo />
      <WhyChooseUs />
      <HomeContact />
    </div>
  );
};

export default Home;
