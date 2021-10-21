//import "./styles.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Particles from "./Components/Particles";
import Comp from "./Components/Proj/Comp";
import Cars from "./Components/Proj/Cars";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Particles />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Comp">
            <Comp />
          </Route>
          <Route path="/Cars">
            <Cars />
          </Route>
        </Switch>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
