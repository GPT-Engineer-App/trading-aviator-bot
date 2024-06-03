import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaRocket, FaChartLine } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleTrade = () => {
    if (!amount || !multiplier) {
      toast({
        title: "Error",
        description: "Please enter both amount and multiplier.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Dummy result calculation
    const tradeResult = (parseFloat(amount) * parseFloat(multiplier)).toFixed(2);
    setResult(tradeResult);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4} width="100%">
          <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Input placeholder="Multiplier" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} />
          <IconButton aria-label="Trade" icon={<FaRocket />} size="lg" onClick={handleTrade} />
        </HStack>
        {result && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%" textAlign="center">
            <Text fontSize="xl">Trade Result: ${result}</Text>
          </Box>
        )}
        <Button
          leftIcon={<FaChartLine />}
          colorScheme="teal"
          variant="solid"
          onClick={() =>
            toast({
              title: "Feature Coming Soon",
              description: "Detailed analytics will be available in the next update.",
              status: "info",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          View Analytics
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
