import "./App.css";
import FetchData from "./components/FetchData";
import PostData from "./components/PostData";
import BasicTable from "./components/BasicTable";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/login/Login";


import ApiSingleData from "./components/ApiSingleData";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateData from "./components/UpdateData";
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
      {/*<switch>*/}
      {/*  <Router>*/}
      {/*    <nav className="navbar bg-light">*/}
      {/*      <div className="container-fluid">*/}
      {/*        <span className="navbar-brand mb-0 h1">*/}
      {/*          <NavLink to="/">home</NavLink>*/}
      {/*        </span>*/}
      {/*        <span className="navbar-brand mb-0 h1">*/}
      {/*          <NavLink to="/FetchData">fetch data</NavLink>*/}
      {/*        </span>*/}
      {/*        <span className="navbar-brand mb-0 h1">*/}
      {/*          <NavLink to="/PostData">post data</NavLink>*/}
      {/*        </span>*/}
      {/*        <span className="navbar-brand mb-0 h1">*/}
      {/*          <NavLink to="/BasicTable">basic table</NavLink>*/}
      {/*        </span>*/}
      {/*        <span className="navbar-brand mb-0 h1">*/}
      {/*          <NavLink to="/login">login</NavLink>*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </nav>*/}
      {/*    <Routes>*/}
      {/*      <Route exact path="/FetchData" element={<FetchData />}></Route>*/}
      {/*      <Route exact path="/PostData" element={<PostData />}></Route>*/}
      {/*      <Route exact path="/BasicTable" element={<BasicTable />}></Route>*/}
      {/*      <Route exact path="/" element={<HomePage />}></Route>*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/BasicTable/view/:id"*/}
      {/*        element={<ApiSingleData catData={catData} />}*/}
      {/*      ></Route>*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/BasicTable/update/:id"*/}
      {/*        element={<UpdateData catData={catData} />}*/}
      {/*      ></Route>*/}
      {/*      <Route exact path="/login" element={<Login />}></Route>*/}
      {/*      <Route exact path="*" element={<PageNotFound />}></Route>*/}
      {/*    </Routes>*/}
      {/*  </Router>*/}
      {/*</switch>*/}
    </>
  );
}

export default App;
