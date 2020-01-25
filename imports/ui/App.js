import React from 'react';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import About from './pages/About'
import Home from './pages/Home'
import BinMain from './Bins/BinMain'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bins/:bid" component={BinMain} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
