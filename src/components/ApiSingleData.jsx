import React from "react";
import { useParams } from "react-router-dom";

const ApiSingleData = ({ catData }) => {
  const { id } = useParams();
  console.log({ catData });
  return (
    <div className="contaner">
      <h1 style={{ textAlign: "center" }}>
        This is The <strong>{catData[id]?.breed}</strong> breed informaton
      </h1>
      <table
        class="table container table-striped"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th scope="col">breed</th>
            <th scope="col">coat</th>
            <th scope="col">country</th>
            <th scope="col">origin</th>
            <th scope="col">pattern</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{catData[id]?.breed}</th>
            <td>{catData[id]?.coat}</td>
            <td>{catData[id]?.country}</td>
            <td>{catData[id]?.origin}</td>
            <td>{catData[id]?.pattern}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApiSingleData;
