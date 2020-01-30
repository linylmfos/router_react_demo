import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'
import Nav from "./pages/Nav";
// import { BrowserRouter as Router, Route } from "react-router-dom"
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home} ></Route>
        <Route path="/mine" component={Mine} ></Route>
      </Router>
    </div>
  );
}

export default App;
