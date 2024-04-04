import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./components/nav/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>,
      <Route index element={<Home />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App({routes}) {
  return (
    <RouterProvider router={router} />
  );
}

export default App;