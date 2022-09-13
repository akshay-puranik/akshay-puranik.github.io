import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const TechStack = () => {
  const techStackLinks = [
    "https://github.com/akshay-puranik/stack-icons/blob/master/logos/react.svg",


  ];

  return (
    <Carousel>
      {
        techStackLinks.map((el) => {
        return <div >
          <img width={""} src={el} />
        </div>
        })
      }
    </Carousel>
  );
};

export default TechStack;