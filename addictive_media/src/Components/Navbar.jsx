import { Box, Text,  Menu, MenuButton, Flex  } from '@chakra-ui/react';

import { MdOutlinePhoneInTalk  } from 'react-icons/md';
import { BiChevronDown   } from 'react-icons/bi';

import React from 'react'

const Navbar = () => {
  return (
    <>
        <Box w='100%' bg='black' p={3} color='white' style={{display:'flex', position:'fixed', top:'0', zIndex:'100'}} >
            <Box w='76%' color='white'>
                <Text>Get Free <Text as='b'>Quote</Text> | Website Starting From <Text as='b'>$ 1900</Text> | Go Live Within <Text as='b'>7 Days</Text> </Text>
            </Box>

            <Box w='24%' color='white' style={{display:'flex'}}>
                <Box mx='5' color='white' style={{display:'flex', alignItems:'center'}}>
                    <Box mx='2'> <MdOutlinePhoneInTalk  /> </Box>
                    <Text _hover={{cursor:"pointer", color:'blue'}}> (972) 489-3157 </Text>
                </Box>
                <Box mx='4' color='white'>
                    <Text  _hover={{cursor:"pointer", color:'blue'}}>Contact Us</Text> 
                </Box>
            </Box>
        </Box>

        <Box w='100%' mt='10' h='20' style={{display:'flex', alignItems:'center'}} py='4'>
            <Box color='black' w='20%' mx='9' style={{display:'flex', justifyContent:'center', alignItems:'baseline'}}>
                <Text fontSize='2xl'>A</Text><Text>DDICTIVE MEDIA</Text>
            </Box>
            <Box w='60%' style={{display:'flex', marginLeft:'12%'}}>
                <Flex flexWrap="wrap" alignItems="center" px="2">
                    <Menu alignItems="center">
                        <MenuButton _hover={{ color: "blue", cursor: "pointer" }}>
                            <Text fontSize="xl"> Services</Text>
                        </MenuButton>
                        <Box pl='1' pt='1' fontSize="3xl" >
                            <BiChevronDown />
                        </Box>
                        <Box color='#ddd' px='4' fontSize="3xl" fontWeight='1' > | </Box>
                    </Menu>
                </Flex>

                <Flex flexWrap="wrap" alignItems="center" px="2">
                    <Menu alignItems="center">
                        <MenuButton _hover={{ color: "blue", cursor: "pointer" }}>
                            <Text fontSize="xl"> Work</Text>
                        </MenuButton>
                        <Box color='#ddd' px='4' fontSize="3xl" fontWeight='1' > | </Box>
                    </Menu>
                </Flex>

                <Flex flexWrap="wrap" alignItems="center" px="2">
                    <Menu alignItems="center">
                        <MenuButton _hover={{ color: "blue", cursor: "pointer" }}>
                            <Text fontSize="xl"> Our Approach</Text>
                        </MenuButton>
                        <Box color='#ddd' px='4' fontSize="3xl" fontWeight='1' > | </Box>
                    </Menu>
                </Flex>

                <Flex flexWrap="wrap" alignItems="center" px="2">
                    <Menu alignItems="center">
                        <MenuButton _hover={{ color: "blue", cursor: "pointer" }}>
                            <Text fontSize="xl"> Company</Text>
                        </MenuButton>
                        <Box pl='1' pt='1' fontSize="3xl" >
                            <BiChevronDown />
                        </Box>
                        
                    </Menu>
                </Flex>

                <Flex>
                <Box m="1"  ml='3'>
                  <Box color="white" bg="#000000" border='1px solid black' px="6" py="2" borderRadius="4px" _hover={{ cursor: "pointer", bg:'white', color:'black' }} >
                    Get a Proposal
                  </Box>
                </Box>
              </Flex>

            </Box>
        </Box>
    </>
  )
}

export default Navbar
