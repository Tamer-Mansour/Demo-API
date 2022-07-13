import React from 'react'
import {useLocation} from 'react-router-dom'
import {Grid, TextField, Button, Typography, Paper} from '@mui/material';
import {useFormik} from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    breed: yup
        .string('Enter your the breed name')
        .required('Breed is required'),
    coat: yup
        .string('Enter your the coat name')
        .required('Coat is required'),
    country: yup
        .string('Enter your the country name')
        .required('Country is required'),
    origin: yup
        .string('Enter your the origin name')
        .required('Origin is required'),
    pattern: yup
        .string('Enter your the pattern name')
        .required('Pattern is required'),
});


const UpdateOne = ({catData}) => {
    const location = useLocation()
    console.log(location)
    const oldData = location.state

    const formik = useFormik({
        initialValues: {
            breed: (oldData.breed),
            coat: (oldData.coat),
            country: (oldData.country),
            origin: (oldData.origin),
            pattern: (oldData.pattern),
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (<Grid item xs={12} style={{maxWidth: 450}}>
        <Paper sx={{p: 6, display: 'flex', flexDirection: 'column'}}>
            <div className="App">
                <Typography gutterBottom variant="h3" align="center">
                    Update Page
                </Typography>
                <Grid>
                    <form onSubmit={formik.handleSubmit}>
                        {/*breed*/}
                        <TextField
                            fullWidth
                            id="breed"
                            label={"breed - " + oldData.breed}
                            type="text"
                            name="breed"
                            value={formik.values.breed}
                            onChange={formik.handleChange}
                            error={formik.touched.breed && Boolean(formik.errors.breed)}
                            helperText={formik.touched.breed && formik.errors.breed}
                        />

                        {/*  coat  */}
                        <p></p>
                        <TextField
                            fullWidth
                            id="coat"
                            label={"coat - " + oldData.coat}
                            type="text"
                            name="coat"
                            value={formik.values.coat}
                            onChange={formik.handleChange}
                            error={formik.touched.coat && Boolean(formik.errors.coat)}
                            helperText={formik.touched.coat && formik.errors.coat}
                        />
                        {/*  country  */}
                        <p></p>
                        <TextField
                            fullWidth
                            id="country"
                            label={"country - " + oldData.country}
                            type="text"
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />
                        {/*  origin  */}
                        <p></p>
                        <TextField
                            fullWidth
                            id="origin"
                            label={"origin - " + oldData.origin}
                            type="text"
                            name="origin"
                            value={formik.values.origin}
                            onChange={formik.handleChange}
                            error={formik.touched.origin && Boolean(formik.errors.origin)}
                            helperText={formik.touched.origin && formik.errors.origin}
                        />
                        {/*  pattern  */}
                        <p></p>
                        <TextField
                            fullWidth
                            id="pattern"
                            label={"pattern - " + oldData.pattern}
                            type="text"
                            name="pattern"
                            value={formik.values.pattern}
                            onChange={formik.handleChange}
                            error={formik.touched.pattern && Boolean(formik.errors.pattern)}
                            helperText={formik.touched.pattern && formik.errors.pattern}
                        />
                        <p></p>
                        <div>
                            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
                        </div>
                    </form>
                </Grid>
            </div>
        </Paper>
    </Grid>);
}

export default UpdateOne
