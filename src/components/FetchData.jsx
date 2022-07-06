import { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
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
    <div>
      <h1>hi</h1>
      {catData.length > 0 &&
        catData.map((cat, index) => {
          return (
            <tr key={index} className="table">
              <th>{cat.breed} </th>
              <td> {cat.coat} </td>
              <td> {cat.country}</td>
              <td> {cat.origin}</td>
              <td> {cat.pattern}</td>
            </tr>
          );
        })}
    </div>
  );
}

export default FetchData;
