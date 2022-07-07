import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ListData from "./ListData";
import ListOne from "./ListOne";
import UpdateOne from "./UpdateOne";

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
            <Router>
                <Routes>
                    <Route exact path="/" element={<ListData/>}/>
                    <Route exact path="/update/:id" element={<UpdateOne catData={catData}/>}/>
                    <Route exact path="/view/:id" element={<ListOne catData={catData}/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;