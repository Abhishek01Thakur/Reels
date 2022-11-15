import React from "react";
import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import {Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
    {/*route-> which component should render on which path */}
      <Route path='/Feed'>
        <Feed></Feed>
      </Route>
      <Route path = '/Login'>
        <Login></Login>
      </Route>
      <Route path = '/PageNotFound'>
        <PageNotFound></PageNotFound>
      </Route>
      <Route path = '/Profile'>
        <Profile></Profile>
      </Route>
      <Route path = '/Signup'>
        <Signup></Signup>
      </Route>

    </Switch>
  );
}

export default App;
