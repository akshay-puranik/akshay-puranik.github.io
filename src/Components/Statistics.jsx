import { Center, Flex, Text,  VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-scroll";

const Statistics = () => {
  return (
    <VStack pb="100px" bg="#f6f6f6" m="auto" id="projects" gap={"40px"}>
      <Text p="60px" pb="0" fontWeight={"bold"} fontSize={"4xl"}>
        Activity
      </Text>
      <GitHubCalendar username="akshay-puranik" />
      <Flex direction={{ md: "row", base: "column" }}>
        <Center>
          <Link>
            <img
              style={{height:"200px"}}
              alt="Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=akshay-puranik&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
              />
          </Link>
        </Center>
        <Center>
          <Link>
            <img
              style={{height:"200px"}}
              alt="Akshay's Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshay-puranik&langs_count=8&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
            />
          </Link>
        </Center>
      </Flex>
    </VStack>
  );
};

export default Statistics;
