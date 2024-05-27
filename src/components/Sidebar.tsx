import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => {
    return (
        <div style={{ width: 250, backgroundColor: '#5A3EDE', height: '100vh', color: 'white' }}>
            <h2 style={{ textAlign: 'center', padding: '20px 0' }}>PLSE</h2>
            <List>
                <ListItem button>
                    <ListItemText primary="Charts" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Tables" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Reports" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Forecast" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
