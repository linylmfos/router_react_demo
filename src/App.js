import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'
import Nav from "./pages/Nav";
import UCenter from "./pages/UCenter";
import NotFound from "./pages/NotFound"
import Demo from "./pages/Demo"
import Shop from "./pages/Shop";
import Book from "./pages/Book";
import WEBBook from "./pages/WEBBook";
import JavaBook from "./pages/JavaBook";


// import { BrowserRouter as Router, Route } from "react-router-dom"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect from="/hellomine" to="mine" />
          <Route exact path="/" component={Home} ></Route>
          {/* <Route exact={true} path="/mine" component={Mine} ></Route> */}
          {/* <Route exact strict path="/mine" component={Mine} ></Route> */}
          <Route  path="/mine" component={Mine} ></Route>
          <Route strict path="/mine/ucenter/:id?" component={UCenter} ></Route>
          {/* <Route path="/demo" render={ ()=> <div>Hello Demo</div> }></Route> */}
          <Route path="/demo" render={ (props)=> <Demo {...props} name="你好" /> }></Route>
          <Route path="/shop" component={ Shop } ></Route>
          {/* <Route path="/book" component= {Book} ></Route> */}
          <Book>
            <Switch>
              <Route path="/book/webbook" component={ WEBBook }></Route>
              <Route path="/book/javabook" component={ JavaBook }></Route>
            </Switch>
          </Book>
          <Route component={NotFound}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
