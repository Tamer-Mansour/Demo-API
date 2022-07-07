import React from 'react'
import {useLocation} from 'react-router-dom'
import {useState} from "react";


import {Grid, TextField, Button, Card, CardContent, Typography} from '@mui/material';

const UpdateData = ({catData}) => {
    const location = useLocation()
    const object = location.state

    return (
        <div className="App">
            <Typography gutterBottom variant="h3" align="center">
                Update Page
            </Typography>
            <Grid>
                {/*<Card style={{maxWidth: 450, padding: "20px 5px", margin: "0 auto"}}>*/}
                {/*    <CardContent>*/}
                <form>
                    <Grid container spacing={1}>

                        <TextField placeholder={object.breed} label="Breed"
                                   variant="outlined" fullWidth
                                   required/>

                        <TextField placeholder={object.coat} label="Coat"
                                   variant="outlined" fullWidth
                                   required/>

                        <TextField placeholder={object.country} label="Country"
                                   variant="outlined" fullWidth
                                   required/>


                        <TextField placeholder={object.origin} label="Origin"
                                   variant="outlined"
                                   fullWidth required/>


                        <TextField label="Pattern" rows={4} placeholder={object.pattern}
                                   variant="outlined" fullWidth required/>


                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>


                    </Grid>
                </form>
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </Grid>
            {/*<h1>{formValue}</h1>*/}
        </div>
    );
}

export default UpdateData
