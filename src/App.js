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
import { isLoaded } from "react-redux-firebase";
import { isEmpty } from "lodash";
import Spinner from "./helpers/Spinner";
import { useSelector } from "react-redux";

const AuthIsLoaded = ({children})=>{
  const profile = useSelector((state)=>state.firebaseReducer.profile)  
  console.log("The profile is", profile);

  //case for not logged in user
  if(
    isLoaded(profile) &&
    isEmpty(profile) 
  ){
    return children
  }

  //case for logged in user
  if(
    isLoaded(profile) &&
    !isEmpty(profile) 
  )
  return children

    return <Spinner />
}

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
      element: <ThemeProvider theme={theme}><><Navbar /><SignUp /></></ThemeProvider>
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
      <AuthIsLoaded>
      <RouterProvider router={router} />
      </AuthIsLoaded>
    </div>
  );
}

export default App;
