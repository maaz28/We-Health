import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { BaseLayout } from "./layouts";
import { LandingLayout } from "./layouts";


import { currentUser } from './config/firebase'
// Route Views
// import BlogOverview from "./views/BlogOverview";
// import UserProfileLite from "./views/UserProfileLite";
// import AddNewPost from "./views/AddNewPost";
// import Errors from "./views/Errors";
// import ComponentsOverview from "./views/ComponentsOverview";
// import Tables from "./views/Tables";
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup'
import AddData from './components/addData'
import RequestData from './components/requestData'
import RecieveData from './components/recieve'
import BuyToken from './components/addToken'
// import BlogPosts from "./views/BlogPosts";
// import MyLibrary from "./views/MyLibrary";
// import Welcome from "./views/Welcome";
// import Forums from "./views/Forums";
// import Chat from './views/Chat'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: BaseLayout,
    component: Login
  },
  {
    path: "/signup",
    layout: BaseLayout,
    component: Signup
  },
  {
    path: "/addData",
    layout: DefaultLayout,
    component: AddData
  },
  {
    path: "/request",
    layout: DefaultLayout,
    component: RequestData
  },
  {
    path: "/buy-token",
    layout: DefaultLayout,
    component: BuyToken
  },
  {
    path: "/recieve",
    layout: DefaultLayout,
    component: RecieveData
  }
];
