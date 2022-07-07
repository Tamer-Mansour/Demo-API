import * as React from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ReplayIcon from '@mui/icons-material/Replay';
import {useEffect, useState} from "react";
import axios from "axios";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";

const URL = `https://catfact.ninja/breeds`;

export default function ListData() {
    const [catData, setCatData] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios(URL)
            setCatData(response.data.data)
        } catch (error) {
            alert(error)
            console.log(error.response)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <h1>Fetched Data</h1>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>breed</TableCell>
                                <TableCell>coat</TableCell>
                                <TableCell>country</TableCell>
                                <TableCell>origin</TableCell>
                                <TableCell align="right">pattern</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {catData.length > 0 &&
                                catData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row.breed}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                        >
                                            {row.coat}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                        >
                                            {row.country}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                        >
                                            {row.origin}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                        >
                                            {row.pattern}
                                        </TableCell>

                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                        >
                                            <Link to={`/update/${index}`} state={catData[index]}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <ReplayIcon style={{color: "red"}}/>
                                                    </ListItemIcon>
                                                </ListItemButton>
                                            </Link>
                                            <Link to={`/view/${index}`} state={catData[index]}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <RemoveRedEyeIcon style={{color: "green"}}/>
                                                    </ListItemIcon>
                                                </ListItemButton>
                                            </Link>
                                            {/*    */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </>
    );
}