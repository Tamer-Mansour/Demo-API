import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ListData from "./ListData";

const AppRouter = () => {

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
            <switch>
                <Router>
                    <Routes>
                        {/*<Route exact path="/" element={<All/>}/>*/}
                        <Route exact path="/listdata" element={<ListData/>}/>
                        {/*<Route exact path="/listdata/update/:id" element={<UpdateOne catData={catData}/>}/>*/}
                        {/*<Route exact path="/listdata/view/:id" element={<ListOne catData={catData}/>}/>*/}
                    </Routes>
                </Router>
            </switch>
        </>
    );
};

export default AppRouter;