import { Box, Center, Image, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import expressJs from "../Assets/Tech_Stack/express.svg"
import bootStrap from "../Assets/Tech_Stack/bootstrap.svg"
import css from "../Assets/Tech_Stack/css-3.svg"
import gitHub from "../Assets/Tech_Stack/github-icon.svg"
import git from "../Assets/Tech_Stack/git-icon.svg"
import html5 from "../Assets/Tech_Stack/html-5.svg"
import javaScript from "../Assets/Tech_Stack/javascript.svg"
// import mongoDb from "../Assets/Tech_Stack/mongodb.svg"
import nodeJs from "../Assets/Tech_Stack/nodejs-icon.svg"
import npm from "../Assets/Tech_Stack/npm.svg"
import reactLogo from "../Assets/Tech_Stack/react.svg"
import reduxLogo from "../Assets/Tech_Stack/redux.svg"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'infinite-react-carousel';

const TechStack = () => {
  const techStack = [
    {
      name: "Express JS",
      image: expressJs
    },
    {
      name: "HTML 5",
      image: html5
    },
    {
      name: "REDUX",
      image: reduxLogo
    },
    {
      name: "React",
      image: reactLogo
    },
    {
      name: "CSS",
      image: css
    },
    {
      name: "Bootstrap",
      image: bootStrap
    },
    {
      name: "Node JS",
      image: nodeJs
    },
    {
      name: "Javascript",
      image: javaScript
    },
    {
      name: "Git",
      image: git
    },
    {
      name: "Github",
      image: gitHub
    },
    {
      name: "NPM",
      image: npm
    },

  ]

  return (
    <>
      <Center>
        <Text fontWeight={"bold"} fontFamily={"sans-serif"} fontSize={"3xl"}>My Tools & Skills</Text>
      </Center>
      <Box maxW={"900px"} m={"auto"}>
        <Slider gap={"30px"} arrows={false} pauseOnHover={false} slidesToShow={"5"} autoplay={true} adaptiveHeight={true} >
          {
            techStack.map((el) => {
              return <div>
                {/* <p>{el.name}</p> */}
                <Image p={"20px"} h={"150px"} src={el.image} />
              </div>
            })
          }
        </Slider>
      </Box>
      <p>Yo</p>
    </>
  );
};

export default TechStack;