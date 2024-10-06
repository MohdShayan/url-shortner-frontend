// App.js
import './App.css';
import Form from './components/Myform.js';
import Navbar from './components/Navbar.js';
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const bgColor = useColorModeValue("#EEEAE3","#212121")
  return (
      <Box 
      minH="100vh"          
      h="auto"              
      w="100%"              
      maxW="100vw"         
      bg={bgColor}          
      overflowY="auto"      
      overflowX="hidden"    
    >
      <Navbar />
      <Form />
  </Box>
  );
}

export default App;
