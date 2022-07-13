import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import './BasicTable.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import BasicTableStyles from './BasicTable.css.js'
import {Link} from 'react-router-dom'

const URL = `https://catfact.ninja/breeds`;

const BasicTable = () => {
    const [catData, setCatData] = useState([])
    console.log('hello', catData[0])

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
            <div className="container">
                <h1>Table for all data</h1>
            </div>
            <div className="container" sx={BasicTableStyles.containTable}>
                <TableContainer>
                    {/* table-striped */}
                    <Table
                        className="table table-striped table-bordered"
                        sx={BasicTableStyles.table}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={BasicTableStyles.strong}
                                    align="lift"
                                    className=""
                                >
                                    breed
                                </TableCell>
                                <TableCell
                                    align="lift"
                                    className="strong"
                                    sx={BasicTableStyles.strong}
                                >
                                    coat
                                </TableCell>
                                <TableCell
                                    align="lift"
                                    className="strong"
                                    sx={BasicTableStyles.strong}
                                >
                                    country
                                </TableCell>
                                <TableCell
                                    align="lift"
                                    className="strong"
                                    sx={BasicTableStyles.strong}
                                >
                                    origin
                                </TableCell>
                                <TableCell
                                    align="lift"
                                    className="strong"
                                    sx={BasicTableStyles.strong}
                                >
                                    pattern
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {catData.length > 0 &&
                                catData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={BasicTableStyles.td}
                                        >
                                            {row.breed}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                            sx={BasicTableStyles.td}
                                        >
                                            {row.coat}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                            sx={BasicTableStyles.td}
                                        >
                                            {row.country}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                            sx={BasicTableStyles.td}
                                        >
                                            {row.origin}
                                        </TableCell>
                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                            sx={BasicTableStyles.td}
                                        >
                                            {row.pattern}
                                        </TableCell>

                                        <TableCell
                                            align="lift"
                                            className="dataColom"
                                            sx={BasicTableStyles.td}
                                        >
                                            <Link
                                                to={`/BasicTable/update/${index}`}
                                                state={catData[index]}
                                                className="btn btn-info"
                                            >
                                                Update
                                            </Link>
                                            <Link
                                                to={`/BasicTable/view/${index}`}
                                                state={catData[index]}
                                                onClick={() => {
                                                }}
                                                className="btn btn-info"
                                            >
                                                View
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
export default BasicTable
