import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';

const Projects = () => {
  return (
    <Box h={"600px"} border={"1px solid black"} p={"30px"} >
      <Box display={"flex"} >
        <Box w={"40%"} border={"1px solid black"} >
          <Center >
            Info
          </Center>
        </Box>
        <Box w={"60%"} border={"1px solid black"} >
          <Center >
            SS
          </Center>
        </Box>
      </Box>
    </Box >
  );
};

export default Projects;