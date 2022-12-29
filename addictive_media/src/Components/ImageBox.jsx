import React from 'react'
import {Box, Text, Image} from '@chakra-ui/react';

const ImageBox = ({myFontColor, value}) => {
  return (
    <Box w='90%' justifyContent='center' m='auto' mt='10'>
      <Box my='2' w='3%' border='2px solid black'></Box>
      <Box style={myFontColor} textAlign='left'><Text as='b' fontSize='5xl'>Selected <span style={{color:'#808080'}}>Work</span></Text></Box>

      <Box display='flex' justifyContent='center' m='auto' mt='12vh' mb='10vh'>
            <Box w='48%' mr='6'>
                <Box _hover={{cursor:'pointer'}}>
                    <Image src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/profile-img01.jpg" alt='img1' />
                </Box>
                <Box textAlign='left' mt='8'>
                    <Text as='b' fontSize='4xl'>Vybe Living</Text>
                    <Text fontSize='2xl' color='#808080'>Best Co Living Community In San Francisco</Text>
                </Box> 
            </Box>

            <Box w='48%' ml='6' mt='16vh'>
                <Box  _hover={{cursor:'pointer'}}>
                    <Image src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/profile-img02.jpg" alt='img2' />
                </Box>
                <Box textAlign='left' mt='8'>
                    <Text as='b' fontSize='4xl'>Simon Data</Text>
                    <Text fontSize='2xl' color='#808080'>Leading Marketing Automation Platform</Text>
                </Box> 
            </Box>

      </Box>

      <Box display='flex' justifyContent='center' m='auto' mt='12vh' mb='10vh'>
            <Box w='48%' mr='6'>
                <Box  _hover={{cursor:'pointer'}}>
                    <Image src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/profile-img03.jpg" alt='img3' />
                </Box>
                <Box textAlign='left' mt='8'>
                    <Text as='b' fontSize='4xl'>Hurom</Text>
                    <Text fontSize='2xl' color='#808080'>The Most Loved Home Appliance Brand</Text>
                </Box> 
            </Box>

            <Box w='48%' ml='6' mt='16vh'>
                <Box  _hover={{cursor:'pointer'}}>
                    <Image src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/profile-img04.jpg" alt='img4' />
                </Box>
                <Box textAlign='left' mt='8'>
                    <Text as='b' fontSize='4xl'>Big Boy Toyz</Text>
                    <Text fontSize='2xl' color='#808080'>One Of The Leading Luxury Car Brand</Text>
                </Box> 
            </Box>

      </Box>

      <Box  _hover={{cursor:'pointer'}} mt='20vh' mb='8vh'>
        <Image src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/amazon-img.jpg" alt='amazon' />
        <Box textAlign='left' mt='6'>
            <Text as='b' fontSize='4xl'>Amazon</Text>
            <Text fontSize='2xl' color='#808080'>World's Leading Global Ecommerce Platform</Text>
        </Box> 
      </Box>


    </Box>
  )
}

export default ImageBox
