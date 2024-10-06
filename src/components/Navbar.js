import React from 'react';
import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const btnColor = useColorModeValue("#cec4b3", "#3B3B3B");
  const bgColor = useColorModeValue("#F7F4EE", "#2b2b2b");
  const hoverBtn = useColorModeValue("#bab6ae", "");

  return (
    <Container maxW="100vw" px={{ base: 4, sm: 6, md: 8, lg: 20 }} bg={bgColor} borderBottom="1px solid" borderColor="gray.600">
      <Flex
        h={20}
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "row" }}
        p={4}
      >
        <Text
          color="white"
          bgClip="text"
          bgColor={"#EE6123"}
          fontSize={{ base: "24px", sm: "30px", md: "35px" }}
          fontWeight="bold"
          textAlign={{ base: "center", sm: "left" }}
          mb={{ base: 2, sm: 0 }}
        >
          <Link to="/">URL Shortener</Link>
        </Text>
        <HStack spacing={2} alignItems="center">
          <Button
            aria-label="Toggle Theme"
            onClick={toggleColorMode}
            bg={btnColor}
            _hover={{ bg: hoverBtn }}
          >
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
