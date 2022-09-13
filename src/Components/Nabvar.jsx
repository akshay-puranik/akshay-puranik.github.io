import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure } from '@chakra-ui/react';
import React from 'react';

const Nabvar = () => {

  const buttons = ["About", "Skills", "Projects", "Contact"]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <div>
      <HStack bg={"black"} p={"20px"} justifyContent={"space-between"}>
        <Button _hover={{ color: "black", bg: "white" }} color={"white"} variant={"ghost"} colorScheme={"gray"}>LOGO</Button>
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

      </HStack>
    </div>
  );
};

export default Nabvar;