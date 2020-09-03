import React from "react"
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./home"
import Details from './containers/Articles'

function App() {
  return (
    <BrowserRouter>
          <>
            <Switch>
              {/* les routes des pages */}
              <Route path="/" exact component={Home} ></Route>
              <Route path="/details" component={Details}></Route>
            </Switch>
          </>
        </BrowserRouter>
  )
}
export default App