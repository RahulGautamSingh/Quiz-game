import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Result from "./Result";
import Page from "./Page";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}
