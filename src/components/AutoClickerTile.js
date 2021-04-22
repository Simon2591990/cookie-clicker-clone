import { Grid, Button, Tooltip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../Styles/AutoClickerTile.css'

function AutoClickerTile({autoClicker, shortNumber, cookies, setCookies, setClicksPerSecond, clicksPerSecond}) {

    const [rank, setRank] = useState({
        number: 1,
        cost: autoClicker.cost * 50,
        color: 'cant-afford'
    })
    

    useEffect(() => {
        const interval = setInterval(() => {
          canAfford();
          canAffordRank();
          
        }, 20 ); 
        return () => clearInterval(interval);
      }, [cookies]);

    const [thisClicker, setThisClicker] = useState({
        name: autoClicker.name,
        cost: autoClicker.cost,
        clicksPerSecond: autoClicker.clicksPerSecond,
        count: autoClicker.count,
        color: autoClicker.color,
        
    })
    const canAffordRank = () => {
        if (cookies >= rank.cost){
            setRank(previousRank => {
                let updatedRank = previousRank;
                updatedRank.color = 'can-afford';
                return updatedRank
            })
        }
        if (cookies < rank.cost){
            setRank(previousRank => {
                let updatedRank = previousRank;
                updatedRank.color = 'cant-afford';
                return updatedRank
            })
        }
    }
    const canAfford = () => {
        if (cookies >= thisClicker.cost){
            setThisClicker(previousClicker => {
                let updatedClicker = previousClicker;
                updatedClicker.color = 'can-afford';
                return updatedClicker
            })
        }
        if (cookies < thisClicker.cost){
            setThisClicker(previousClicker => {
                let updatedClicker = previousClicker;
                updatedClicker.color = 'cant-afford';
                return updatedClicker
            })
        }
    }
    
    const handleBuyClicker = () => {
        if ( cookies >= thisClicker.cost){
            setCookies(cookies - thisClicker.cost);
            setThisClicker(previousClicker => {
                let updatedClicker = previousClicker;
                updatedClicker.cost = Math.round(updatedClicker.cost * 1.3)
                updatedClicker.count = updatedClicker.count + 1
                return updatedClicker
                
            });
            setClicksPerSecond(cps => cps + thisClicker.clicksPerSecond)
        }
    }
    const handleIncreaseRank = () => {
        if (cookies >= rank.cost){
            setCookies(cookies - rank.cost)
            setClicksPerSecond(clicksPerSecond + (thisClicker.clicksPerSecond * thisClicker.count))
            setRank(previousRank => {
                let updatedRank = previousRank;
                updatedRank.cost = updatedRank.cost * 3;
                updatedRank.number = updatedRank.number + 1
                return updatedRank
            })
            setThisClicker(previousClicker => {
                let updatedClicker = previousClicker;
                updatedClicker.clicksPerSecond = updatedClicker.clicksPerSecond * 2
                return updatedClicker
                
            })
            
        }
    }
    return (
        <>
            <Grid container >
                <Grid  container direction='column' alignItems='stretch' item xs>
                    
                    <button class={rank.color} onClick={handleIncreaseRank} variant='contained'   >
                        <Grid>
                            <p>Rank: {rank.number}</p>
                            <p>{shortNumber(rank.cost)}</p>
                        </Grid>
                    </button>
                </Grid>
                <Grid container direction='column' alignItems='stretch'  item xs={8}>
                        
                    <button class={thisClicker.color} onClick={handleBuyClicker} variant='contained' >
                    <Tooltip title={
                        <React.Fragment>
                        <p>CPS: {thisClicker.clicksPerSecond * 50}</p>
                        <p>Total CPS: {shortNumber(thisClicker.count * thisClicker.clicksPerSecond * 50)}</p>
                        </React.Fragment>
                        }>
                        <Grid >
                            <p>{thisClicker.name}: {thisClicker.count}</p>
                            <p>cost: {shortNumber(thisClicker.cost)}</p>
                        </Grid>
                    </Tooltip> 
                    </button>
                </Grid>
            </Grid>
        
        
        
        </>
    );

    
}

export default AutoClickerTile;