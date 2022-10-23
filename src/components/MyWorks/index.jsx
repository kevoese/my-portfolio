/* eslint-disable react/no-array-index-key */
import React from 'react';
import './MyWorks.scss';
import SliderMenu from 'react-slider-menu-package';
import ProjectDiv from './ProjectDiv';

const projects = [
  {
    link: 'https://paymentgateway.accessbankplc.com/#/',
    img: 'https://ucarecdn.com/ac3ed5f8-7312-49df-813e-b105f146e280/accessgateway_app.png',
  },
  {
    link: 'https://payfi.ng',
    img: 'https://ucarecdn.com/f22b075a-5dd8-4335-b078-1ab4b0ba75b6/payfi_web_app.png',
  },
  {
    link: 'https://www.npmjs.com/package/react-typewriter-effect',
    img: 'https://ucarecdn.com/45fda402-d593-49b7-baae-4939158b2ec3/progressbar_package.png',
  },
  {
    link: 'https://www.npmjs.com/package/react-animated-progress-bar',
    img: 'https://ucarecdn.com/45fda402-d593-49b7-baae-4939158b2ec3/progressbar_package.png',
  },
  {
    link: 'https://customer-staging.payfi.ng',
    img: 'https://ucarecdn.com/9d46af11-2526-49fd-a9d0-cb8e7393ca90/payfi_customer_app.png',
  },
  {
    link: 'https://merchant.payfi.ng',
    img: 'https://ucarecdn.com/cfc7157d-e1cf-4a94-a3c9-790a20d3b301/payfi_merchant_app.png',
  },
  {
    link: 'https://admin.payfi.ng',
    img: 'https://ucarecdn.com/fd74b7c9-fc7a-45e9-b1eb-e015a2868e98/payfi_admin_app.png',
  },
  {
    link: 'https://nn-ship-maintenance.herokuapp.com/#/',
    img: 'https://ucarecdn.com/fc4da3d2-7cdd-4382-a1b0-96229a62cd3d/nns_app.png',
  },
  {
    link: 'https://dhml-frontend.herokuapp.com/',
    img: 'https://ucarecdn.com/482d2cd3-ebe7-4bbe-be24-0848b853493e/dhml_app.png',
  },
  {
    link: 'https://accessafrica.de/de/',
    img: 'https://ucarecdn.com/7dc56c86-feb3-403a-b933-a68607c93f03/access_africa.png',
  },
  {
    link: 'https://subtropicolimited.co.za/en/',
    img: 'https://ucarecdn.com/cc48c446-6416-43ea-9f75-2de2a032ff87/subtropical.png',
  },
  {
    link: 'https://ithrive.school/',
    img: 'https://ucarecdn.com/2aac4392-5239-4709-82b7-6295d63fa8da/thrive.png',
  },
  {
    link: 'https://cardinal.preparing.live/',
    img: 'https://ucarecdn.com/45f6d242-28af-44d7-9a77-0590e6bc9333/cardinal_app.png',
  },
  {
    link: 'https://business.woven.finance/login',
    img: 'https://ucarecdn.com/ca4fadc5-29d9-4f80-b45e-1f039fbc4499/woven_app.png',
  },
];

const MyWorks = () => (
  <div className="my-works" id="myworks">
    <h2 className="my-works__title">My Works</h2>
    <div className="my-works__slider-wrap">
      <SliderMenu
        autoMode
        elementsPerView={3}
        height={250}
        sliderTransition={1.5}
        autoModeDelayTime={15}
        elementsMinWidth={350}
      >
        {
          projects.map((project, index) => (
            <ProjectDiv
              key={index}
              appLink={project.link}
              imgLink={project.img}
            />
          ))
        }
      </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
