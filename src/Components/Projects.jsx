import { Box, Center, Flex, Image, VStack } from '@chakra-ui/react';
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

const Projects = () => {


  const milaap = [m1, m2, m3]
  const ideakart = [ik1, ik2, ik3]
  const zappos = [zp1, zp2, zp3]

  return (
    <Box h={"600px"} p={"30px"} >
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} >
        <Box w={{ base: "100%", md: "40%" }} border={"1px solid black"} >
          <Center >
            Info
          </Center>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} border={"1px solid black"} >
          <Slider arrows={false} autoplaySpeed={"3000"} slidesToShow={"1"} autoplay={true} >
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
        <Box w={{ base: "100%", md: "40%" }} border={"1px solid black"} >
          <Center >
            Info
          </Center>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} border={"1px solid black"} >
          <Slider arrows={false} autoplaySpeed={"3000"} slidesToShow={"1"} autoplay={true} >
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
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} >
        <Box w={{ base: "100%", md: "40%" }} border={"1px solid black"} >
          <Center >
            Info
          </Center>
        </Box>
        <Box w={{ base: "100%", md: "60%" }} border={"1px solid black"} >
          <Slider arrows={false} autoplaySpeed={"3000"} slidesToShow={"1"} autoplay={true} >
            {
              ideakart.map((el) => {
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