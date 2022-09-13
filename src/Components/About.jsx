import { Avatar, Center, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import profileImg from "../Assets/profile_img.jpeg"

const About = () => {
  return (
    <>
      <HStack p={"30px"} spacing={"30px"} >
        <Center>
          <Avatar w={"400px"} h={"400px"} src={profileImg} />
        </Center>
        <Center>
          <Text fontSize={"3xl"} fontFamily={"sans-serif"} >Hi I am Akshay Puranik. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis quis illum facere accusamus expedita, tempora provident nesciunt. Enim et laborum quo saepe officiis sint quibusdam porro nisi. Esse, cupiditate! </Text>
        </Center>
      </HStack>
      <Center>
        <VStack w={"70%"} p={"20px"} >
          <Text fontWeight={"bold"} fontSize={"4xl"}>About Me</Text>
          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, unde ullam saepe totam minus debitis distinctio delectus porro blanditiis hic provident eos voluptatem vero amet natus odit et dolor accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, beatae veritatis! Excepturi, labore reiciendis ex itaque pariatur vero corrupti enim? Et deserunt perspiciatis esse dolorum vel, quibusdam sunt minima quas?</Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;