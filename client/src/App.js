import { Route } from "react-router-dom/cjs/react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard/currentdiseases"></Redirect>
      </Route>
      <Route path="/dashboard" exact>
        <Redirect to="/dashboard/currentdiseases"></Redirect>
      </Route>
      <Route path="/dashboard/currentdiseases">
        <Dashboard />
      </Route>
      <Route path="/dashboard/pastdiseases">
        <Dashboard></Dashboard>
      </Route>
      <Route path="/admin/login" exact>
        <Login></Login>
      </Route>
      <Route path="/admin/register" exact>
        <Register></Register>
      </Route>
    </Switch>
  );
}
export default App;
