import { Grid } from '@material-ui/core';
import React from 'react';
import '../Styles/MainDisplay.css'

function MainDisplay({cookies, setCookies, shortNumber, clicksPerSecond}) {

    const handleManualClick = () => {
        setCookies(cookies + 1)
    }

    return (
        
        <>
            <Grid container direction='column' alignItems='center'>
                <h2>Cookies: {shortNumber(cookies)} </h2>
                <h4>cookies per second: {shortNumber(clicksPerSecond * 50)} </h4>
                <img onClick={handleManualClick} id='cookie' src="https://i.pinimg.com/originals/3c/32/fc/3c32fc5df675e77467b0343ea7b46dbb.jpg" alt="cookie"  />
            </Grid>
        </>
    );
}

export default MainDisplay;