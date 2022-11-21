import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
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
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const theme = createTheme();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Dashboard /></>,
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
    }
  ]);
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
