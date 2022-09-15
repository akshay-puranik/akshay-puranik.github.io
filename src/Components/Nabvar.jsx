import { Box, Button, Collapse, Drawer, DrawerContent, DrawerOverlay, HStack, Image, Slide, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';

const Nabvar = () => {

  const buttons = ["About", "Skills", "Projects", "Contact"]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <div>
      <HStack bg={"black"} p={"20px"} justifyContent={"space-between"}>
        <Image display={{ base: "none", md: "flex" }} h={"50px"} src={"https://www.automotiveproductsinc.com/assets/logo/ap-logo-white-notext.png"} />
        <HStack display={{ base: "none", md: "flex" }} >
          {
            buttons.map((el) => {
              return <Button _hover={{ color: "black", bg: "white" }} color={"white"} variant={"ghost"} colorScheme={"gray"} key={el}>
                {el}
              </Button>
            })
          }
          {/* display={{ base: "block", md: "none" }} */}
        </HStack>

        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          size={"s"}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"} >
            <VStack p={"30px"} >
              {
                buttons.map(el => <Button _hover={{ color: "black", bg: "white" }} color={"white"} variant={"ghost"} colorScheme={"gray"} key={el}> {el} </Button>)
              }
            </VStack>
          </DrawerContent>
        </Drawer>

      </HStack>
    </div>
  );
};

export default Nabvar;