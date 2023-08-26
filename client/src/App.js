import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "./components/Dashboard";
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
      <Route path="/admin"></Route>
      <MainNavigation></MainNavigation>
    </Switch>
  );
}
export default App;
