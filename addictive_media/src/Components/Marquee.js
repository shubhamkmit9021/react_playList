import React from 'react'
import {Box, Text, Image} from '@chakra-ui/react'


const Marquee = ({myFontColor}) => {

  return (
    <Box  w='90%' m='auto' my='14vh' justifyContent='center'>

        <Box py='10' style={{display:'flex', alignItems:'center'}}>

            <Box w='18%'><Text style={myFontColor} fontSize='2xl'>REAL RESULTS:</Text></Box>

            <Box  w='82%'>
             {/* eslint-disable-next-line */}
              <marquee  scrollamount="12"  direction="left" >
                    <Box style={{display:'flex', alignItems:'center'}}>
                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text style={myFontColor}  as='b' mr='10' fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text style={myFontColor} as='b' mr='10' fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                        <Image mr='3' src="https://theaddictivemedia.com/wp-content/themes/theaddictivemedia/assets/images/car.png" alt='logo' />
                        <Text as='b' mr='10' style={myFontColor} fontWeight='600' fontSize='3xl'>
                            184% increase in organic traffic | Financial Services Provider 
                        </Text>
                        <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>


                    </Box>
                   
                    
                   
                </marquee>
            </Box>

        </Box>

       <Box  border='1px solid #ddd'> </Box>
    </Box>
  )
}

export default Marquee
