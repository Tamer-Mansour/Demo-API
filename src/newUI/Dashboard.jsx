import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import AppRouter from "./AppRouter";

export default function Dashboard() {
    return <DashboardContent/>;
}

function DashboardContent() {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar/>
            <Container maxWidth="lg" sx={{mt: 6, mb: 4}}>
                <Grid container spacing={3} justifyContent="center">
                    <AppRouter/>
                </Grid>
                <Copyright sx={{pt: 4}}/>
            </Container>
        </Box>
    );
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Tamer tutorial
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
