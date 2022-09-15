import { AbsoluteCenter, Box, Center, Flex, Image, Text, VStack } from '@chakra-ui/react';
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
import React from 'react';
import Slider from 'infinite-react-carousel';

import onResize from "infinite-react-carousel";


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
    <Box p={"5% 10%"} >
      <Center p={"30px"} >
        <Text fontWeight={"bold"} fontFamily={"sans-serif"} fontSize={"3xl"}>Tools & Skills</Text>
      </Center>
      <Box>
        <Slider autoplaySpeed={"1500"} gap={"30px"} arrows={false} pauseOnHover={false} slidesToShow={"4"} wheel={true} autoplay={true} adaptiveHeight={true} >
          {
            techStack.map((el) => {
              return <Box>
                <Center>
                  <Image p={"20px"} h={"150px"} src={el.image} />
                </Center>
              </Box>
            })
          }
        </Slider>
      </Box>
      <Box p={"30px"} border={"1px solid black"} >
        <Flex flexDirection={{ base: "column", md: "row" }}  >
          <Box p={"10px"} border={"1px solid black"} h={"100px"} w={"100%"} >
            <Center>
              <Text>
                Front End
              </Text>
            </Center>
          </Box>
          <Box p={"10px"} border={"1px solid black"} h={"100px"} w={"100%"} >
            <Center>
              <Text>
                Back End
              </Text>
            </Center>
          </Box>
          <Box p={"10px"} border={"1px solid black"} h={"100px"} w={"100%"} >
            <Center>
              <Text>
                DSA
              </Text>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TechStack;