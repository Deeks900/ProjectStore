import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import {Navbar} from './components';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from "./components/Project/ProjectDetails";
import { CreateProject } from "./components/Project/CreateProject";
import {SignUp} from './../src/components/Auth';
import {SignIn} from './../src/components/Auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {About} from './components/Layout/About';
import ProtectRoute from "./ProtectRoute";

function App() {
  const theme = createTheme();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><ProtectRoute><Navbar /><Dashboard /></ProtectRoute></>,
    },
    {
      path: "/project:id",
      element: <><Navbar /><ProjectDetails /></>
    },
    {
      path:"/signup",
      element: <><Navbar /><SignUp /></>
    },
    {
      path:"/signin",
      element:<ThemeProvider theme={theme}><><Navbar /><SignIn /></></ThemeProvider>
    },
    {
      path:"/create",
      element:<ThemeProvider theme={theme}><><Navbar /><CreateProject /></></ThemeProvider>
    },
    {
      path:"/about",
      element:<><Navbar /><About /></>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
