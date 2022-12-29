import { Box } from '@chakra-ui/react'
import './App.css';
import React, {useState} from 'react';

import BlackBox from './Components/BlackBox';
import ImageBox from './Components/ImageBox';
import Marquee from './Components/Marquee';
import Navbar from './Components/Navbar';
import TopHome from './Components/TopHome';
import BlackHeading from './Components/BlackHeading';
import NextPart from './Components/NextPart';

const white = {background:'white'};
const black = {background:'black'};

const whitefontclr = {color:'#fff'};
const blackfontclr = {color:'#000000'};


function App() {

  const [bgColor, setBgColor] = useState(white)
  const [myFontColor, setMyFontColor] = useState(blackfontclr)
  const [value, setValue] = useState(true);


  return (
    <Box style={bgColor} className="App">

      <Box onMouseEnter={ () => ( setBgColor(white), setMyFontColor(blackfontclr), setValue(true) ) } >
          <Navbar  />
          <TopHome myFontColor={myFontColor} value={value} />
      </Box>
      
      <Box>
        <Marquee myFontColor={myFontColor} />
      </Box>

      <Box onMouseEnter={ () => ( setBgColor(black), setMyFontColor(whitefontclr), setValue(false) ) } >
          <BlackBox myFontColor={myFontColor} value={value} /> 
      </Box>

      <Box onMouseEnter={ () => ( setBgColor(white), setMyFontColor(blackfontclr), setValue(true) ) } >
          <ImageBox myFontColor={myFontColor} value={value} />
      </Box>
      
      <Box onMouseEnter={ () => ( setBgColor(white), setMyFontColor(blackfontclr), setValue(true) ) } >
        <BlackHeading myFontColor={myFontColor} value={value}  />
      </Box>

      <Box onMouseEnter={ () => ( setBgColor(black), setMyFontColor(whitefontclr), setValue(false) ) }>
        <NextPart myFontColor={myFontColor} value={value} />
      </Box>
        
        
    </Box>
  );
}

export default App;
