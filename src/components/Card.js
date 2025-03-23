import {Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = function({title, description, imageSrc}) {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack align="start" bg="white" borderRadius="10px">
      <Image src={imageSrc} alt={title} borderRadius="10px" />
      <Box px="10px" color="black">
        <Heading as="h2" fontSize="15px" alignItems="start" my="10px" textAlign="left" >
          {title}
        </Heading>

        <Text py="10px" fontSize="12px" letterSpacing="0.5px">
          {description}
        </Text>

        <HStack
          py="10px"
          fontSize="12px"
          letterSpacing="0.5px"
          fontWeight="bolder" >
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );

};

export default Card;
