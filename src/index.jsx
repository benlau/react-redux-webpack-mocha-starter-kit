import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "components/App";
import Counter from "containers/Counter";
import store from "store";

require("./polymer-layout.css");
require("./style.scss");


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Counter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
