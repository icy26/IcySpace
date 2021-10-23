//import "./styles.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Particles from "./components/Particles";
import Comp from "./components/proj/comp";
import Cars from "./components/proj/cars";
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
