import { AppBar, Button, Grid } from '@material-ui/core';



function Header() {
    return (
        <>
        <AppBar position='static'>
            <Grid 
                container
                justify='space-between'
            >
                <Button  color='secondary' variant='contained'>Details</Button>
                <h1>Cookie Clicker</h1>
                <Button color='secondary' variant='contained'>Upgrades</Button>
            </Grid>
        </AppBar>
        </>
        
    );
}

export default Header;