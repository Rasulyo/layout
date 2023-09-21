import React from 'react';
import {MainPage} from "./components/MainPage";
import {Portfolio} from "./components/Portfolio";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        path: '*',
        element: <Portfolio />
    }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
