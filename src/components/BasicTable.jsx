import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./BasicTable.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasicTableStyles from "./BasicTable.css.js";

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
        {/* table-striped */}
        <Table className="table table-striped" sx={BasicTableStyles.table}>
          <TableHead>
            <TableRow>
              <TableCell sx={BasicTableStyles.strong} align="lift" className="">
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
                <TableRow key={index}>
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
