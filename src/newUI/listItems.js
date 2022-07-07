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
import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';


export const mainListItems = (
    <>
        {/*Home*/}
        {/*<Link style={{textDecoration: 'none', color: ''}} href="/">*/}
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItemButton>
        {/*</Link>*/}
        {/*data*/}
        <ListItemButton>
            <ListItemIcon>
                <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="Data"/>
        </ListItemButton>
        {/*Customers*/}
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Customers"/>
        </ListItemButton>
        {/*Reports*/}
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Reports"/>
        </ListItemButton>
        {/*Integrations*/}
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
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItemButton>

    </>
);