import {  Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/navbar/index";
import About from "./component/About";

function App() {

  return (
    <>
      {/* <router> */}
        <Navbar />
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About"  component={About} />
        </Switch>
      {/* </router> */}
    </>
  );
}

export default App;
