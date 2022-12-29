import React from 'react'
import {Box, Text, Grid, GridItem} from '@chakra-ui/react';




const BlackBox = ({myFontColor, value }) => {
  return (
    <Box w='80%' m='auto' paddingInline='6' my='14vh' textAlign='left' justifyContent='center' >
      <Box>
        <Text as='b' style={myFontColor} fontSize='5xl' >High output. Low maintenance.</Text>
      </Box>

      <Box my='2'>
          <Text style={myFontColor} fontSize='xl'>We're a nimble team of designers and developers from all around the world.</Text>
      </Box>
      
      <Box my='2'>
          <Text style={myFontColor} fontSize='xl'>We believe that great products can come from anywhere. So, we encourage our team to untether, stretch their legs, and explore alternative workspaces.</Text>
      </Box>

      <Grid w='80%' justifyContent='center' m='auto' mt='16vh' templateColumns='repeat(3, 1fr)' gap='6vw' textAlign='center'>

        <GridItem  >
            <Box>
                <Box style={myFontColor} display='flex' justifyContent='center'>
                    <Text as='b' fontSize='7xl' fontWeight='400' >-40 </Text>
                    <Text fontSize='7xl' fontWeight='400'  mt='-20px'>%</Text>
                </Box>
                <Text color='#808080'><span style={{fontSize:'18px', fontWeight:700, color: value ? '#000000' : '#fff' }}>Less Cost</span> compare to your local agency</Text>
            </Box>
        </GridItem>

        <GridItem  >
            <Box style={myFontColor}>
                <Box display='flex' justifyContent='center'>
                    <Text as='b' fontSize='7xl' fontWeight='400' >+50 </Text>
                    <Text fontSize='7xl' fontWeight='400'  mt='-20px'>%</Text>
                </Box>
                <Text color='#808080'><span style={{fontSize:'18px', fontWeight:700, color: value ? '#000000' : '#fff'}}>Better Quality</span>  from so called
design agency</Text>
            </Box>
        </GridItem>

        <GridItem  >
            <Box style={myFontColor}>
                <Box display='flex' justifyContent='center'>
                    <Text as='b' fontSize='7xl' fontWeight='400' >2x</Text>
                </Box>
                <Text color='#808080'><span style={{fontSize:'18px', fontWeight:700, color: value ? '#000000' : '#fff'}}>Faster Speed</span> which no
agency can match</Text>
            </Box>
        </GridItem>

        
      </Grid>

     

    </Box>
  )
}

export default BlackBox
