import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import MyWorks from '../components/MyWorks';
import WhyHireMe from '../components/WhyHireMe';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

const Main = () => (
  <div>
    <Navbar />
    <Welcome />
    <AboutMe />
    <MyWorks />
    <WhyHireMe />
    <ContactMe />
    <Footer />
  </div>
);

export default Main;
