import React from "react";
import { useParams,useLocation } from "react-router-dom";

const ApiSingleData = () => {
  const location = useLocation();
  const object = location.state;
  // const { id } = useParams();
  // console.log({ catData });
  return (
    <div className="contaner">
      <h1 style={{ textAlign: "center" }}>
        This is The <strong>{object.breed}</strong> breed informaton
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
            <th scope="row">{object.breed}</th>
            <td>{object.coat}</td>
            <td>{object.country}</td>
            <td>{object.origin}</td>
            <td>{object.pattern}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApiSingleData;
