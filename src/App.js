import React, { useContext } from "react";
import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { AuthContextProvider, AuthContext } from "./context/AuthContext";
import { Switch, Route , Redirect} from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          {/*route-> which component should render on which path */}
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/PageNotFound">
            <PageNotFound></PageNotFound>
          </Route>
          <PrivateRoute path="/feed" comp={Feed}></PrivateRoute>
          <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>
          <Route path="/Signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

function PrivateRoute(props) {
 
  let Component = props.comp;
  // check -> are you loggedIN
  let cUser = useContext(AuthContext);
  // cuser-> null ->login page
  // cuser-> anything 

  return (
    <Route
      {...props}
      render={
        (props) => {
          // logic
          return cUser != null ? <Component {...props}>
          </Component> : <Redirect
            {...props}
            to="/login"></Redirect>
        }
      }
    ></Route>
  )

}

export default App;
