import * as React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function createData(time, amount) {
    return {time, amount};
}

export default function Chart() {
    return (
        <>
            <Grid item xs={12} md={8} lg={7}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                </Paper>
            </Grid>

        </>
    );
}