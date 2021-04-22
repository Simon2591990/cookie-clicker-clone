import { Grid } from '@material-ui/core';
import React from 'react';
import AutoClickerTile from '../components/AutoClickerTile';

function AutoClickerContainer({shortNumber, setCookies, cookies, setClicksPerSecond, clicksPerSecond}) {

    class AutoClicker{
        constructor(name, cost, clicksPerSecond){
        this.name = name;
        this.cost = cost;
        this.clicksPerSecond = clicksPerSecond;
        this.count = 0;
        this.color = 'cant-afford'
        }
    }
    const autoClicker1 = new AutoClicker('Mouse Clicks', 10, 0.02);
    const autoClicker2 = new AutoClicker('Grannies', 50, 0.1);
    const autoClicker3 = new AutoClicker('Farms', 250, 0.5)
    const autoClicker4 = new AutoClicker('Mines', 1250, 2.5)
    const autoClicker5 = new AutoClicker('Factories', 6250, 12.5)
    const autoClicker6 = new AutoClicker('Banks', 31250, 62.5)
    const autoClicker7 = new AutoClicker('Temples', 156250, 312.5)

    const autoClickerArray = [
        autoClicker1, 
        autoClicker2, 
        autoClicker3, 
        autoClicker4,
        autoClicker5,
        autoClicker6,
        autoClicker7
    ]

    const autoClickerNodes = autoClickerArray.map((autoClicker, index) => {
        return(
        <AutoClickerTile
            autoClicker={autoClicker}
            setClicksPerSecond={setClicksPerSecond}
            setCookies={setCookies}
            cookies={cookies}
            shortNumber={shortNumber}
            clicksPerSecond={clicksPerSecond}
            />
            
        )
    })

    return (
        <>
        <Grid  container direction='column'>
           {autoClickerNodes}
        </Grid>
        </>
    );
}

export default AutoClickerContainer;