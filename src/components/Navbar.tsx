import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                {/* <Button color="inherit">Normal View</Button>
                <Button color="inherit">Growth View</Button>
                <Button color="inherit">Period From</Button>
                <Button color="inherit">Period To</Button> */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
