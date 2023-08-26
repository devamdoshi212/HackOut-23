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
        <Layout>
          <Redirect to="/quotes" />
        </Layout>
      </Route>
      <Route path="/quotes" exact>
        <Layout>
          <AllQuotes />
        </Layout>
      </Route>
      <Route path="/quotes/:quoteId">
        <Layout>
          <QuoteDetail />
        </Layout>
      </Route>
      <Route path="/new-quote">
        <Layout>
          <NewQuote />
        </Layout>
      </Route>
      <Route path="*">
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}
export default App;
