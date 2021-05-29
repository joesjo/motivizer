import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from "./components/MainPage"
import MotivatePage from "./components/MotivatePage"
import SavedPage from "./components/SavedPage"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/motivate" >
          <MotivatePage />
        </Route>
        <Route path="/myposters" >
          <SavedPage />
        </Route>
        <Route path="/" >
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
