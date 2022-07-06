import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./BasicTable.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function BasicTable() {
  const [catData, setCatData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(`https://catfact.ninja/breeds`);
      console.log(response.data.data);
      setCatData(response.data.data);
    } catch (error) {
      alert(error);
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="containTable">
      <TableContainer>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell align="lift" className="strong">
                breed
              </TableCell>
              <TableCell align="lift" className="strong">
                coat
              </TableCell>
              <TableCell align="lift" className="strong">
                country
              </TableCell>
              <TableCell align="lift" className="strong">
                origin
              </TableCell>
              <TableCell align="lift" className="strong">
                pattern
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catData.length > 0 &&
              catData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.breed}
                  </TableCell>
                  <TableCell align="lift">{row.coat}</TableCell>
                  <TableCell align="lift">{row.country}</TableCell>
                  <TableCell align="lift">{row.origin}</TableCell>
                  <TableCell align="lift">{row.pattern}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
