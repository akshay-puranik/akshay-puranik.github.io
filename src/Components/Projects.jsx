import { Box, Center, Flex, Image, List, ListIcon, ListItem, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Slider from 'infinite-react-carousel';
import m1 from "../Assets/projects/milaap/milaap1.png"
import m2 from "../Assets/projects/milaap/milaap2.png"
import m3 from "../Assets/projects/milaap/milaap3.png"
import ik1 from "../Assets/projects/ideakart/ideakart1.png"
import ik2 from "../Assets/projects/ideakart/ideakart2.png"
import ik3 from "../Assets/projects/ideakart/ideakart3.png"
import zp1 from "../Assets/projects/zappos/zappos1.png"
import zp2 from "../Assets/projects/zappos/zappos2.png"
import zp3 from "../Assets/projects/zappos/zappos3.png"
import checkMark from "../Assets/correct.png";
import TechStack from './TechStack';
import css from "../Assets/Tech_Stack/css-3.svg"
import javaScript from "../Assets/Tech_Stack/javascript.svg"
import html5 from "../Assets/Tech_Stack/html-5.svg"
import gitHub from "../Assets/Tech_Stack/github-icon.svg"
import deployed from "../Assets/world-wide-web.png"


const Projects = () => {


  const milaap = [m1, m2, m3]
  const ideakart = [ik1, ik2, ik3]
  const zappos = [zp1, zp2, zp3]

  return (
    <Box p={"30px"} >
      <Center p={"30px"} pt={"0"} >
        <Text fontWeight={"bold"} fontFamily={"sans-serif"} fontSize={"4xl"}>Projects</Text>
      </Center>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} >
        <Box w={{ base: "100%", md: "40%" }}  >
          <Flex flexDirection={{ base: "column", md: "row" }} >
            <Box p={"20px"} >
              <Text pb={"10px"} fontSize={"2xl"} >Features:</Text>
              <List spacing={3}>
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
              <Text p={"10px 0px"} fontSize={"2xl"} >Tech Stack:</Text>
              <Box >
                <Flex flexDirection={{ base: "row", md: "column" }} >
                  <Image p={"15px"} h={"80px"} src={html5} />
                  <Image p={"15px"} h={"80px"} src={css} />
                  <Image p={"15px"} h={"80px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"20px"} p={"10px"}  >
            <Flex>
              <a href="https://github.com/akshay-puranik/unkempt-meal-6720">

                <Image pl={"30px"} h={"40px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="https://candid-ganache-399b55.netlify.app/">
                <Image pr={"30px"} h={"40px"} src={deployed} />
              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}  >
          <Slider arrows={true} slidesToShow={"1"} autoplay={false} >
            {
              milaap.map((el) => {
                return <Box key={el} >
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              })
            }
          </Slider>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} >
        <Box w={{ base: "100%", md: "40%" }}  >
          <Flex flexDirection={{ base: "column", md: "row" }} >
            <Box p={"20px"} >
              <Text pb={"10px"} fontSize={"2xl"} >Features:</Text>
              <List spacing={3}>
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
              <Text p={"10px 0px"} fontSize={"2xl"} >Tech Stack:</Text>
              <Box >
                <Flex flexDirection={{ base: "row", md: "column" }} >
                  <Image p={"15px"} h={"80px"} src={html5} />
                  <Image p={"15px"} h={"80px"} src={css} />
                  <Image p={"15px"} h={"80px"} src={javaScript} />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={"20px"} p={"10px"}  >
            <Flex>
              <a href="https://github.com/akshay-puranik/spectacular-self-7673">
                <Image pl={"30px"} h={"40px"} src={gitHub} />
              </a>
              <Spacer />
              <a href="https://luminous-nougat-2006e1.netlify.app/">
                <Image pr={"30px"} h={"40px"} src={deployed} />

              </a>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}  >
          <Slider arrows={true} slidesToShow={"1"} autoplay={false} >
            {
              zappos.map((el) => {
                return <Box key={el} >
                  <Center>
                    <Image p={"20px"} h={"100%"} src={el} />
                  </Center>
                </Box>
              })
            }
          </Slider>
        </Box>
      </Box>

    </Box >
  );
};

export default Projects;