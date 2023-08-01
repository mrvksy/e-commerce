import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({item}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/products/${item.id}`}>
        <Image src={item.image} alt="product" />

        <Box p="2">
          <Box display="flex" alignItems="baseline">
          {item.price}
          </Box>
        </Box>
        <Box mt="1" fontWeight="italic" as="h5" lineHeight="tight">
          {item.name}
        </Box>
        <Box display="flex" alignItems="baseline">
        
          </Box>
      </Link>
      <Button colorScheme="blue" size="md"> Add to Card</Button>
    </Box>
  );
}

export default Card;
