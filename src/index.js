import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import {Route, BrowserRouter, Switch} from "react-router-dom";

import Login from "./Componentes/Login";
import Lista from "./Componentes/Lista";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/lista" component = {Lista}/>
      <Route render = {() => <div><center><h1>404 Error: Not Found</h1></center></div>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"));

serviceWorker.unregister();
