import { Avatar, Box, Center, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import profileImg from "../Assets/profile_img.jpeg"

const About = () => {
  return (
    <>
      <Center>
        <Flex w={"100%"} flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center" }}
          p={"50px"}
          bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
          color="white">
          <Center p={"30px"} >
            <Avatar w={"250px"} h={"250px"} src={profileImg} />
          </Center>
          <Spacer />
          <Center p={"30px"} >
            <Text fontSize={"3xl"} fontFamily={"sans-serif"} >Hi I am Akshay Puranik. <br /> I am a Full Stack Web Developer</Text>
          </Center>
        </Flex>
      </Center>
      <Center>
        <VStack w={"100%"} p={"5% 10%"} >
          <Text fontWeight={"bold"} fontSize={"4xl"}>About Me</Text>
          <Text fontSize={{ base:"sm",md:"1xl"}} >
            Web developer with the ability to learn and collaborate. Worked with a
            rapidly growing startup and developed an interest in web
            development. Been through a 1000+ hours of bootcamp, learning
            JavaScript, React Js, Node Js, etc. Eager to kickstart a carreer in this
            field and looking forward to the learning/challenges yet to come.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;