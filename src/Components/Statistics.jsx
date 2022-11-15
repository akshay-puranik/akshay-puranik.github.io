import { Center, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <Heading mt={{ base: "16", md: "0" }}>Statistics</Heading>
      <GitHubCalendar username="akshay-puranik" />
      <Flex direction={{md:"row",base:"column"}} >
        <Center>
          <a href="https://github.com/akshay-puranik/github-readme-stats">
            <img
              alt="Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=akshay-puranik&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
            />
          </a>
        </Center>
        <Center>
          <a href="https://github.com/akshay-puranik/github-readme-stats">
            <img
              style={{ height: "100%" }}
              alt="Akshay's Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshay-puranik&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
            />
          </a>
        </Center>
      </Flex>
    </VStack>
  );
};

export default Statistics;
