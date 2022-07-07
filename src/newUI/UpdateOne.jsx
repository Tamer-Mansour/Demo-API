import React from 'react'
import {useLocation} from 'react-router-dom'


import {Grid, TextField, Button, Typography, Paper} from '@mui/material';

const UpdateOne = ({catData}) => {
    const location = useLocation()
    console.log(location)
    const object = location.state

    return (
        <Grid item xs={12} style={{maxWidth: 450}}>
            <Paper sx={{p: 6, display: 'flex', flexDirection: 'column'}}>
                <div className="App">
                    <Typography gutterBottom variant="h3" align="center">
                        Update Page
                    </Typography>
                    <Grid>
                        <form>
                            <Grid container spacing={1}>
                                <TextField placeholder={object?.breed} label="Breed"
                                           variant="outlined" fullWidth
                                           required/>
                                <TextField placeholder={object?.coat} label="Coat"
                                           variant="outlined" fullWidth
                                           required/>
                                <TextField placeholder={object?.country} label="Country"
                                           variant="outlined" fullWidth
                                           required/>
                                <TextField placeholder={object?.origin} label="Origin"
                                           variant="outlined"
                                           fullWidth required/>
                                <TextField label="Pattern" rows={4} placeholder={object?.pattern}
                                           variant="outlined" fullWidth required/>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </Paper>
        </Grid>
    );
}

export default UpdateOne
