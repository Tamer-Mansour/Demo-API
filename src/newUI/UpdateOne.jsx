import React from 'react'
import {useLocation} from 'react-router-dom'
import {FormControl, FormHelperText, Input, InputLabel} from '@mui/material';

import {Grid, TextField, Button, Typography, Paper} from '@mui/material';
import {Formik} from "formik";

const UpdateOne = ({catData}) => {
    const location = useLocation()
    console.log(location)
    const object = location.state

    return (<Grid item xs={12} style={{maxWidth: 450}}>
        <Paper sx={{p: 6, display: 'flex', flexDirection: 'column'}}>
            <div className="App">
                <Typography gutterBottom variant="h3" align="center">
                    Update Page
                </Typography>
                <Grid>
                    <Formik
                        initialValues={{breed: '', coat: '', country: '', origin: '', pattern: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.breed) {
                                errors.breed = 'Required';
                            } else if (!values.coat) {
                                errors.coat = 'Required';
                            } else if (!values.country) {
                                errors.country = 'Required';
                            } else if (!values.origin) {
                                errors.origin = 'Required';
                            } else if (!values.pattern) {
                                errors.pattern = 'Required';
                            }

                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */
                          }) => (<form onSubmit={handleSubmit}>
                            {/*breed*/}
                            <FormControl>
                                <InputLabel htmlFor="breed">Breed: {object.breed}</InputLabel>
                                <Input
                                    id="breed"
                                    type="text"
                                    name="breed"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.breed}
                                    aria-describedby="err-breed"
                                    placeholder={object.breed}
                                />
                                <FormHelperText
                                    id="err-breed">{errors.breed && touched.breed && errors.breed}</FormHelperText>
                            </FormControl>
                            {/*  coat  */}
                            <p></p>
                            <FormControl>
                                <InputLabel htmlFor="coat">Coat: {object.coat}</InputLabel>
                                <Input
                                    id="coat"
                                    type="text"
                                    name="coat"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.coat}
                                    aria-describedby="err-coat"
                                    placeholder={object.coat}
                                />
                                <FormHelperText
                                    id="err-coat">{errors.coat && touched.coat && errors.coat}</FormHelperText>
                            </FormControl>
                            {/*  country  */}
                            <p></p>
                            <FormControl>
                                <InputLabel htmlFor="country">Country: {object.country}</InputLabel>
                                <Input
                                    id="country"
                                    type="text"
                                    name="country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country}
                                    aria-describedby="err-country"
                                    placeholder={object.country}
                                />
                                <FormHelperText
                                    id="err-country">{errors.country && touched.country && errors.country}</FormHelperText>
                            </FormControl>
                            {/*  origin  */}
                            <p></p>
                            <FormControl>
                                <InputLabel htmlFor="origin">Origin: {object.origin}</InputLabel>
                                <Input
                                    id="origin"
                                    type="text"
                                    name="origin"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.origin}
                                    aria-describedby="err-origin"
                                    placeholder={object.origin}
                                />
                                <FormHelperText
                                    id="err-origin">{errors.origin && touched.origin && errors.origin}</FormHelperText>
                            </FormControl>
                            {/*  pattern  */}
                            <p></p>
                            <FormControl>
                                <InputLabel htmlFor="pattern">Pattern: {object.pattern}</InputLabel>
                                <Input
                                    id="pattern"
                                    type="text"
                                    name="pattern"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.pattern}
                                    aria-describedby="err-pattern"
                                    placeholder={object.pattern}
                                />
                                <FormHelperText
                                    id="err-pattern">{errors.pattern && touched.pattern && errors.pattern}</FormHelperText>
                            </FormControl>
                            {/*    Button*/}
                            <p></p>
                            <div>
                                <Button type="submit" disabled={isSubmitting} variant="outlined">Submit</Button>
                            </div>
                        </form>)}


                        {/*<form>*/}
                        {/*    <Grid container spacing={1}>*/}
                        {/*        <TextField placeholder={object?.breed} label="Breed"*/}
                        {/*                   variant="outlined" fullWidth*/}
                        {/*                   required/>*/}
                        {/*        <TextField placeholder={object?.coat} label="Coat"*/}
                        {/*                   variant="outlined" fullWidth*/}
                        {/*                   required/>*/}
                        {/*        <TextField placeholder={object?.country} label="Country"*/}
                        {/*                   variant="outlined" fullWidth*/}
                        {/*                   required/>*/}
                        {/*        <TextField placeholder={object?.origin} label="Origin"*/}
                        {/*                   variant="outlined"*/}
                        {/*                   fullWidth required/>*/}
                        {/*        <TextField label="Pattern" rows={4} placeholder={object?.pattern}*/}
                        {/*                   variant="outlined" fullWidth required/>*/}
                        {/*        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>*/}
                        {/*    </Grid>*/}
                        {/*</form>*/}
                    </Formik>
                </Grid>
            </div>
        </Paper>
    </Grid>);
}

export default UpdateOne
