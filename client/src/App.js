import { Route } from "react-router-dom/cjs/react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import Fieldform from "./components/Fieldform";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/admin/login">
          <Login></Login>
        </Route>
        <Route path="/admin/register">
          <Register></Register>
        </Route>
        <Route path="/admin/fieldform">
          <Fieldform></Fieldform>
        </Route>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
