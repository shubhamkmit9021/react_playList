import React, {useState} from "react";
import { Box, Text } from "@chakra-ui/react";
import { Type } from "./Type";

const TopHome = ({myFontColor}) => {

  // const [fontclr, setFontclr] = useState(false);
  return (
    <Box w="96%" h="78vh"  my="2" mb='10vh' style={{ display: "flex", justifyContent:'center', margin:'auto' }} >
      
      <Box w="60%" h="70vh" marginLeft="10" mt='6'  >
        
        <Box textAlign="left">
          <Text as="b" style={myFontColor} fontFamily="inter" fontSize="6xl"  lineHeight= 'normal'> Top Rated Web Design Company In Dallas. </Text>
        </Box>

        <Box my='3' p='2' style={{display:'flex'}} lineHeight= 'normal'>
            <Box borderLeft='4px solid black'  height='14vh' mr='4' mt='0'> </Box>
            
            <Box>
                <Box style={{display:'flex'}}>
                    <Text style={myFontColor} fontFamily="inter" fontSize="3xl"> Hello there,👋 Our team of </Text>
                    <Text style={myFontColor} fontFamily="inter" fontSize="3xl" ml='3' as="b"><Type /></Text>
                </Box>

                <Box style={{display:'flex'}}>
                    <Text style={myFontColor} fontFamily="inter" fontSize="3xl"> have been waiting for you </Text>
                </Box>
            </Box>

        </Box>

        <Box mt="10" ml='3'>
            <Box w='20vw' h='12vh' fontSize='xl' bg="#000000" color='#fff' border='1px solid #bbb'  borderRadius="4px" _hover={{ cursor: "pointer", bg:'white', color:'#000000' }} >
               <Text mt='5'  alignContent='center' alignItems='center' alignSelf='center'> Get Started Now</Text>
            </Box>
        </Box>

      </Box>

      <Box w="40%" h="70vh" border="1px solid black" mx="8" mt='6' > emoji box </Box>

    </Box>
  );
};

export default TopHome;
