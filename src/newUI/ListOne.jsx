import React from 'react';
import {useLocation} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Grid} from "@mui/material";

const ListOne = ({catData}) => {
    const location = useLocation();
    const object = location.state;
    return (
        <div>
            <h1>This the data of {object?.breed}</h1>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>breed</TableCell>
                                <TableCell>coat</TableCell>
                                <TableCell>country</TableCell>
                                <TableCell>origin</TableCell>
                                <TableCell>pattern</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{object?.breed}</TableCell>
                                <TableCell>{object?.coat}</TableCell>
                                <TableCell>{object?.country}</TableCell>
                                <TableCell>{object?.origin}</TableCell>
                                <TableCell>{object?.pattern}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </div>
    );
};

export default ListOne;