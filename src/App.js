import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './routes/Home';
import Prices from './routes/Prices';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <route path="/" exact>
            <Home />
          </route>
          <Route path="/prices">
            <Prices />

          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
