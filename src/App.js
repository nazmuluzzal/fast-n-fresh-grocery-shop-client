import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login ";
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Orders from "./Components/Orders/Orders";
import AddProduct from "./Components/AddProduct/AddProduct";
import EditProducts from "./Components/EditProducts/EditProducts";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import Deals from "./Components/Deals/Deals";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/addProducts">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/editProducts">
              <EditProducts></EditProducts>
            </Route>
            <Route path="/manageProducts">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/deals">
              <Deals></Deals>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
