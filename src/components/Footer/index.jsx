import React from "react";
import {
  Box,
  VStack,
  Stack,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Stack
        bgColor="gray.100"
        h="100%"
        w="100%"
        p={{ base: "40px", md: "40px 80px" }}
        marginTop="50px"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        spacing="40px"
      >
        <VStack spacing="16px" alignItems="flex-start">
          <Image
            src="https://static.opensea.io/Logos/opensea-pride.svg"
            w="40px"
          />
          <Text fontWeight="bold" color="text.700" fontSize="xl">
            The New Creative <br />
            Economy
          </Text>
        </VStack>

        <VStack spacing="8px" alignItems="flex-start">
          <Text fontWeight="bold" color="text.700" marginBottom="8px">
            CRYPTER
          </Text>
          <Text fontWeight="600" fontSize="sm" color="gray.500">
            Discover
          </Text>
          <Text fontWeight="600" fontSize="sm" color="gray.500">
            Connect Wallet
          </Text>
        </VStack>

        <VStack spacing="8px" alignItems="flex-start">
          <Text fontWeight="bold" color="text.700" marginBottom="8px">
            INFO
          </Text>
          <Text fontWeight="600" fontSize="sm" color="gray.500">
            FAQ
          </Text>
          <Text fontWeight="600" fontSize="sm" color="gray.500">
            Create Item
          </Text>
        </VStack>

        {/* NEWSLETTER */}
        <VStack spacing="16px" alignItems="flex-start">
          <Text fontWeight="bold" color="text.700">
            JOIN NEWSLETTER
          </Text>
          <Text fontWeight="600" fontSize="sm" color="gray.500">
            Suscribe our newsletter to get more free NFT <br />
            content and resources
          </Text>
          <InputGroup>
            <Input
              placeholder="Enter your e-mail"
              fontSize="sm"
              borderRadius="40px"
              borderWidth="1px"
              borderColor="text.600"
            />
            <InputRightElement>
              <i
                data-feather="arrow-right"
                style={{ width: "16px", stroke: "gray" }}
              ></i>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Stack>

      {/* COPYRIGHT */}
      <Stack
        bgColor="gray.200"
        h="100%"
        w="100%"
        p={{ base: "16px 40px", md: "16px 80px" }}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        textAlign="center"
      >
        <Text fontSize="xs" fontWeight="600" color="gray.500">
          Copyright 2022® All rights reserved
        </Text>
        <Text
          fontSize="xs"
          fontWeight="600"
          color="gray.500"
          display={{ base: "none", md: "flex" }}
        >
          We use 🍪 for better user experience
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
