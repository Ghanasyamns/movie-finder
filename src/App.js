import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ResultPage from "./ResultPage";

import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchPage} />
      <Route path="/result/:movie" component={ResultPage} />
    </Router>
  );
}

export default App;
