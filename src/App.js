import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from "./components/MainPage"
import MotivatePage from "./components/MotivatePage"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/motivate" >
          <MotivatePage />
        </Route>
        <Route path="/" >
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
