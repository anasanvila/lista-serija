import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg='blue.150' mx="auto" bottom="0" width="100%" position="fixed" pt="20px" px="20" color="white">
              <Text fontSize='14px' py='3.5'> © 2022 Copyright BIT</Text>
        </Box>
    )
}

export default Footer;