import React from 'react'
import {Box, Text} from '@chakra-ui/react';

const BlackHeading = ({myFontColor, value }) => {
  return (
    <Box w='75%' color='#808080' m='auto' paddingInline='6' my='14vh' textAlign='center' justifyContent='center'>
        <Text as='b'  fontSize='5xl'>Hello there, Our team of <span style={{fontSize:'42px', fontWeight:700, color: value ? '#000000' : '#fff' }}>result-getters</span> has been waiting for you.</Text>
        <Box mt="10" >
            <Box w='20vw' m='auto' h='12vh' fontSize='xl' bg="#000000" color='#fff' border='1px solid #bbb'  borderRadius="4px" _hover={{ cursor: "pointer", bg:'white', color:'#000000' }} >
               <Text mt='5'  alignContent='center' alignItems='center' alignSelf='center'>View Our All Work</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default BlackHeading
