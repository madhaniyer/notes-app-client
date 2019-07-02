import React from "react";
import {Switch} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import  NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

//<Route path="/" exact component={Home} />
//<Route path="/login" exact component={Login} />
export default ({childProps}) => 
<Switch> 
    <AppliedRoute path="/" exact component={Home} props={childProps} />} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
    <AppliedRoute component={NotFound}/>
</Switch>