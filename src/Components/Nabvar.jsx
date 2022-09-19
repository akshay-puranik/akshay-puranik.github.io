import {  Button,  Drawer, DrawerContent, DrawerOverlay, HStack, Image, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { NavLink } from 'react-router-dom';

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
              return <NavLink _hover={{ color: "black", bg: "white" }} style={{padding:"5px",color:"white"}} key={el}>
                {el}
              </NavLink>
            })
          }
          {/* display={{ base: "block", md: "none" }} */}
        </HStack>

        <Button ref={btnRef} display={{base:"block",md:"none"}} colorScheme='teal' onClick={onOpen}>
          <DehazeIcon/>
        </Button>
        <Drawer
          size={"xs"}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"} >
            <VStack p={"30px"} >
              {
                buttons.map((el) => {
                  return <NavLink _hover={{ color: "black", bg: "white" }} style={{ padding: "5px", color: "white" }} key={el}>
                    {el}
                  </NavLink>
                })
              }
            </VStack>
          </DrawerContent>
        </Drawer>

      </HStack>
    </div>
  );
};

export default Nabvar;