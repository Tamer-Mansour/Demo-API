import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';


export const mainListItems = (
    <>
        <Link style={{textDecoration: 'none', color: ''}} href="/home">
            <ListItemButton>
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="Orders"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Customers"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItemButton>
    </>
);

export const secondaryListItems = (
    <>
        <ListSubheader component="div" inset>
            other pages
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItemButton>
    </>
);