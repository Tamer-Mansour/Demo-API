import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./newUI/Dashboard";

function App() {
  const [catData, setCatData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(`https://catfact.ninja/breeds`);
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
    <>
      <Dashboard/>
    </>
  );
}

export default App;
