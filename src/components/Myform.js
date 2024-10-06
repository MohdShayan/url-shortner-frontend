import React, { useState, useEffect } from "react";
import { createURL, getAllUrls, deleteUrlById } from "../api";
import {
  Button,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  HStack,
  Text,
  VStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const Form = () => {
  const [urlData, setUrlData] = useState({ redirectURL: "" });
  const [allUrls, setAllUrls] = useState([]);

  const btnColor = useColorModeValue("#0265D2", "#0265D2");
  const inpColor= useColorModeValue("#FFFFFF","#262626")
  const delBtn = useColorModeValue("#e83030","#C53030")
  const txtColor = useColorModeValue("black","white")


  const handleAddNewURL = async () => {
    if (!urlData.redirectURL) {
      alert("Please enter a URL");
      return;
    }
    try {
      const response = await createURL(urlData);
      console.log("URL added successfully", response.data);
      setUrlData({ redirectURL: "" });
      fetchAllUrls();
    } catch (error) {
      console.error("Error Adding URL ", error);
      alert("Failed to add URL. Please try again.");
    }
  };

  const fetchAllUrls = async () => {
    try {
      const response = await getAllUrls();
      setAllUrls(response.data);
    } catch (error) {
      console.error("Error fetching URLs", error);
    }
  };

  const deleteUrl = async (shortID) => {
    try {
      await deleteUrlById(shortID);
      fetchAllUrls();
    } catch (error) {
      console.error("Error deleting URL", error);
      alert("Failed to delete URL. Please try again.");
    }
  };

  useEffect(() => {
    fetchAllUrls();
  }, []);

  return (
    <Container maxW="container.lg" centerContent marginTop={"25px"} justifyContent={"center"} >
      <VStack spacing={4} w="100%">
        <Text fontSize="2xl" mb={4} fontWeight={700}>
        Place your long URL and get back a Shortened URL
        </Text>
        <HStack spacing={4} w="100%">
          <Input
            type="text"
            placeholder="https://www.example.com"
            value={urlData.redirectURL}
            onChange={(e) =>
              setUrlData({ ...urlData, redirectURL: e.target.value })
            }
            flex="1"
            bg={inpColor}
            textColor={txtColor}
          />
          <Button bg={btnColor} _hover={{ bg: "#023cd1" }} onClick={handleAddNewURL} textColor={"white"} >
            Shorten Link
          </Button>
        </HStack>
        <Box w="100%">
  <Table variant="simple" mt={4} w="100%">
    <Thead>
      <Tr>
        <Th fontWeight={700} fontSize={15} textAlign={"center"}>S No.</Th>
        <Th fontWeight={700} fontSize={15} textAlign={"center"} minWidth={"250px"}>
          Original URL
        </Th>
        <Th fontWeight={700} fontSize={15} textAlign={"center"} minWidth={"150px"}>
          Short ID
        </Th>
        <Th fontWeight={700} fontSize={15} textAlign={"center"} minWidth={"250px"}>
          Redirect URL
        </Th>
        <Th fontWeight={700} fontSize={15} textAlign={"center"}>Total Clicks</Th>
        <Th fontWeight={700} fontSize={15} textAlign={"center"}>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {allUrls.map((url, index) => (
        <Tr key={url.shortID} borderBottom="1px solid" borderColor="#db009d">
          <Td textAlign={"center"}>{index + 1}</Td>
          <Td textAlign={"center"} minWidth={"250px"}>{url.redirectURL}</Td>
          <Td textAlign={"center"} minWidth={"150px"}>{url.shortID}</Td>
          <Td textAlign={"center"} textDecoration={"underline"} minWidth={"250px"}>
            <a
              href={`http://localhost:3003/api/url/${url.shortID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:3003/api/url/{url.shortID}
            </a>
          </Td>
          <Td textAlign={"center"}>{url.visitHistory.length}</Td>
          <Td>
            <Button
              bg={delBtn}
              textColor={"White"}
              _hover={{bg : "#a82828"}}
              onClick={() => deleteUrl(url.shortID)}
            >
              Delete
            </Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</Box>
      </VStack>
    </Container>
  );
};

export default Form;
