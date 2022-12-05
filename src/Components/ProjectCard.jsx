import { Box, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProjectCard = (props) => {
  const {title,desc,tech,gitLogo,liveLogo,gitLink,liveLink,image} = props;

  return (
    <VStack gap="10px" bg="#f6f6f6" boxShadow="sm" p="10px 20px">
      <Image borderRadius="10px" src={image} />
      <Heading p="10px" size="md">{title}</Heading>
      <Text p="5px 10px" fontSize="sm" textAlign="justify">
        {desc}
      </Text>
      <Heading size="sm">Tech Stack</Heading>
      <HStack w="100%" justifyContent="space-around">
        {tech.map((el) => {
          return <Image w="30px" src={el} />;
        })}
      </HStack>
      <Heading size="sm">Take a Look</Heading>
      <HStack w="80%">
        <a href={gitLink}>
          <Image w="30px" src={gitLogo} />
        </a>
        <Spacer />
        <a href={liveLink}>
          <Image w="30px" src={liveLogo} />
        </a>
      </HStack>
    </VStack>
  );

};

export default ProjectCard;
