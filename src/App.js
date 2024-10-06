// App.js
import "./App.css";
import Form from "./components/Myform.js";
import Navbar from "./components/Navbar.js";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const bgColor = useColorModeValue("#EEEAE3", "#212121");
  return (
    <Box
      minH="100vh"
      h="full"
      w="100%"
      maxW="100vw"
      bg={bgColor}
      overflowY={{ base: "auto", md: "hidden" }}
      overflowX="hidden"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Box flex="1" overflowY="auto">
        <Box overflowX="auto">
          <Form />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
