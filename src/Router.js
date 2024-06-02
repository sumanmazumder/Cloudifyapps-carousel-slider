import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Slider from "./components/Slider";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // children:[
            
        // ]
    },
    {
        path: "/slider",
        element: <Slider />
    }
]);

export default Router;