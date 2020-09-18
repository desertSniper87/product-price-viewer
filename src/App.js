import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <route path="/">
            <Home />
          </route>
          <Route path="/prices">
            
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
