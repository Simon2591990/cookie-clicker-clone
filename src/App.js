import './App.css';
import Header from './containers/Header';
import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import MainDisplay from './containers/MainDisplay';
import AutoClickerContainer from './containers/AutoClickerContainer';
import { useEffect, useState } from 'react';


function App() {

  //states
  const [cookies, setCookies] = useState(0)
  //divided by 50
  const [clicksPerSecond, setClicksPerSecond] = useState(0.02);


  //theme
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#13293d',
      },
      secondary: {
        main: '#2a628f',
      },
    },
  });

  // divide number by the affix to get the short number
  // multiyply followed by divide gives the relevent decimal places
  const shortNumber = (number) => {
    number = Math.round(number)
    
    if (number.toString().length > 15){
        return parseFloat(Math.round(number / 1000000000000000 * 1000 ) / 1000).toFixed(3)  + " Quadrillion"
    }
    if (number.toString().length > 12){
        return parseFloat(Math.round(number / 1000000000000 * 1000) / 1000).toFixed(3) + " Trillion"
    }
    if (number.toString().length > 9){
        return parseFloat(Math.round(number / 1000000000 * 1000) / 1000).toFixed(3) + " Billion"
    }
    if (number.toString().length > 6){
        return parseFloat(Math.round(number / 1000000 * 1000) / 1000).toFixed(3) + " Million"
    }
    if (number.toString().length > 4){
        return  parseFloat(Math.round(number / 1000 * 1000 ) / 1000).toFixed(3) + " Thousand"
    }
    return Math.round(number)
} 
  
  //game ticker 
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(cookies => cookies + clicksPerSecond)
      console.log('tick')
    }, 20 ); 
    return () => clearInterval(interval);
  }, [cookies]);  

  return (
    <>
      
        <Header />
        <Grid container direction='row' >
          <Grid container item xs={9}>
            <MainDisplay 
              cookies={cookies}
              setCookies={setCookies}
              shortNumber={shortNumber}
              clicksPerSecond={clicksPerSecond} />
          </Grid>
          <Grid container item xs={3}>
            <AutoClickerContainer 
              setClicksPerSecond={setClicksPerSecond}
              setCookies={setCookies}
              cookies={cookies}
              shortNumber={shortNumber}
              clicksPerSecond={clicksPerSecond}
              />
              
          </Grid>
        </Grid>
        
      
    </>

    
  );
}

export default App;
