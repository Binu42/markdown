import React from 'react';
import About from './pages/About'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
