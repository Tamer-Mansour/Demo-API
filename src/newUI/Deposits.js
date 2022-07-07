import * as React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


export default function Deposits() {
    return (
        <>
            <Grid item xs={12} md={4} lg={5}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <h1>Hello man</h1>
                </Paper>
            </Grid>

        </>
    );
}