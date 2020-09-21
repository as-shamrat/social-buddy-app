import React, { useState } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";
import Detail from './Components/Detail/Detail';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="">
     
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <Detail></Detail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
