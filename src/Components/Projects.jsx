import {
  Box,
  Center,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Slider from "infinite-react-carousel";
import m1 from "../Assets/projects/milaap/milaap1.png";
import m2 from "../Assets/projects/milaap/milaap2.png";
import m3 from "../Assets/projects/milaap/milaap3.png";
import ik1 from "../Assets/projects/ideakart/ideakart1.png";
import ik2 from "../Assets/projects/ideakart/ideakart2.png";
import ik3 from "../Assets/projects/ideakart/ideakart3.png";
// import bnb1 from "../Assets/projects/bnbclone/landing.jpg";
// import bnb2 from "../Assets/projects/bnbclone/foot.png";
// import bnb3 from "../Assets/projects/bnbclone/signin.png";
import checkMark from "../Assets/correct.png";
import TechStack from "./TechStack";
import css from "../Assets/Tech_Stack/css-3.svg";
import javaScript from "../Assets/Tech_Stack/javascript.svg";
import html5 from "../Assets/Tech_Stack/html-5.svg";
import gitHub from "../Assets/Tech_Stack/github-icon.svg";
import deployed from "../Assets/world-wide-web.png";

const Projects = () => {
  const milaap = [m1, m2, m3];
  const ideakart = [ik1, ik2, ik3];
  const clockify = [];
  // const bnbw = [bnb1, bnb2, bnb3];

  return (
    <Box p={"20px 20%"}>
      <Center p={"30px"} pt={"0"}>
        <Text fontWeight={"bold"} fontFamily={"sans-serif"} fontSize={"4xl"}>
          Projects
        </Text>
      </Center>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }} mb="40px">
          <Center fontSize="xl">IdeaKart Clone</Center>
          <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
            <Box p={"20px"}>
              <Text pb={"10px"} fontSize={"l"}>
                Features:
              </Text>
              <List spacing={3} fontSize="14px">
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Landing Page
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Cart Page
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      About Section
                    </Center>
                  </Flex>
                </ListItem>
              </List>
            </Box>
            <Spacer />
            <Box>
              <Flex w="100px" p={"25px 0px"} fontSize={"l"}>
                Tech Stack:
              </Flex>
              <Box>
                <Flex
                  flexDirection={{ base: "row", md: "column" }}
                  mb={{ base: "20px" }}
                  justifyContent={{ base: "space-around" }}
                >
                  <Image p={"5px"} h={"40px"} src={html5} />
                  <Image p={"5px"} h={"40px"} src={css} />
                  <Image p={"5px"} h={"40px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"0px"} p={""}>
            <Flex>
              <a href="https://github.com/akshay-puranik/Ideakart-Clone">
                <Image pl={"30px"} h={"30px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="https://luminous-nougat-2006e1.netlify.app/">
                <Image pr={"30px"} h={"30px"} src={deployed} />
              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Slider arrows={true} slidesToShow={"1"} autoplay={false}>
            {ideakart.map((el) => {
              return (
                <Box key={el}>
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }} mb="40px">
          <Center fontSize="xl">Milaap Clone</Center>
          <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
            <Box p={"20px"}>
              <Text pb={"10px"} fontSize={"l"}>
                Features:
              </Text>
              <List spacing={3} fontSize="14px">
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Login and SignUp functionality
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Create a fundraiser
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Track progress of fundraisers
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Data hosted locally
                    </Center>
                  </Flex>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Flex w="100px" p={"25px 0px"} fontSize={"l"}>
                Tech Stack:
              </Flex>
              <Box>
                <Flex
                  flexDirection={{ base: "row", md: "column" }}
                  mb={{ base: "20px" }}
                  justifyContent={{ base: "space-around" }}
                >
                  <Image p={"5px"} h={"40px"} src={html5} />
                  <Image p={"5px"} h={"40px"} src={css} />
                  <Image p={"5px"} h={"40px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"0px"} p={""}>
            <Flex>
              <a href="https://github.com/akshay-puranik/unkempt-meal-6720">
                <Image pl={"30px"} h={"30px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="https://candid-ganache-399b55.netlify.app/">
                <Image pr={"30px"} h={"30px"} src={deployed} />
              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Slider arrows={true} slidesToShow={"1"} autoplay={false}>
            {milaap.map((el) => {
              return (
                <Box key={el}>
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }} mb="40px">
          <Center fontSize="xl">Clockify Clone</Center>
          <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
            <Box p={"20px"}>
              <Text pb={"10px"} fontSize={"l"}>
                Features:
              </Text>
              <List spacing={3} fontSize="14px">
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Teams Section
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Groups Section
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Tracker Functionality
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Dashboard Graphs
                    </Center>
                  </Flex>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Flex w="100px" p={"25px 0px"} fontSize={"l"}>
                Tech Stack:
              </Flex>
              <Box>
                <Flex
                  flexDirection={{ base: "row", md: "column" }}
                  mb={{ base: "20px" }}
                  justifyContent={{ base: "space-around" }}
                >
                  <Image p={"5px"} h={"40px"} src={html5} />
                  <Image p={"5px"} h={"40px"} src={css} />
                  <Image p={"5px"} h={"40px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"0px"} p={""}>
            <Flex>
              <a href="https://github.com/RupeshSahu969/equable-pleasure-9638">
                <Image pl={"30px"} h={"30px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="clockify-clone-ak6okzwmb-akshay-puranik.vercel.app">
                <Image pr={"30px"} h={"30px"} src={deployed} />
              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Slider arrows={true} slidesToShow={"1"} autoplay={false}>
            {ideakart.map((el) => {
              return (
                <Box key={el}>
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "40%" }} mb="40px">
          <Center fontSize="xl">Bath & Body Works Clone</Center>
          <Flex w="100%" flexDirection={{ base: "column", md: "row" }}>
            <Box p={"20px"}>
              <Text pb={"10px"} fontSize={"l"}>
                Features:
              </Text>
              <List spacing={3} fontSize="14px">
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Authentication Functionality
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Landing Page
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Mobile View
                    </Center>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Center>
                      <Image src={checkMark} h={"15px"} pr={"10px"} />
                      Dynamic Component Mapping
                    </Center>
                  </Flex>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Flex w="100px" p={"25px 0px"} fontSize={"l"}>
                Tech Stack:
              </Flex>
              <Box>
                <Flex
                  flexDirection={{ base: "row", md: "column" }}
                  mb={{ base: "20px" }}
                  justifyContent={{ base: "space-around" }}
                >
                  <Image p={"5px"} h={"40px"} src={html5} />
                  <Image p={"5px"} h={"40px"} src={css} />
                  <Image p={"5px"} h={"40px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"0px"} p={""}>
            <Flex>
              <a href="https://github.com/pankajsajwan12/spectacular-self-7673">
                <Image pl={"30px"} h={"30px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="https://bnbtempdep-akshay-puranik.vercel.app/">
                <Image pr={"30px"} h={"30px"} src={deployed} />
              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}>
          <Slider arrows={true} slidesToShow={"1"} autoplay={false}>
            {ideakart.map((el) => {
              return (
                <Box key={el}>
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
