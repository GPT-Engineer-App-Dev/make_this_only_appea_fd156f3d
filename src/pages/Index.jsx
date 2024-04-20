import React, { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  const [showInitialText, setShowInitialText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialText(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" m="auto" textAlign="center">
        {showInitialText ? (
          <>
            <Heading as="h2" size="3xl">
              Warehousing and Distribution
            </Heading>
            <Text fontSize="xl">
              We offer storage and efficient distribution solutions for your goods
            </Text>
          </>
        ) : (
          <>
            <Heading as="h2" size="3xl">
              Supply Chain and Management
            </Heading>
            <Text fontSize="xl">
              We manage the complete journey of your goods, from sourcing to delivery
            </Text>
          </>
        )}
      </Flex>
    </Container>
  );
};

export default Index;
