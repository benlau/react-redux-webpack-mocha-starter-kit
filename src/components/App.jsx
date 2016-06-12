import React from "react";
import {List} from "immutable";
import {Link} from "react-router";

require("./App.scss");

export default class App extends React.Component {

  render() {
    return (<div className="App fullbleed vertical layout">
      <div className="header">Header</div>
      <div className="flex">
        {this.props.children}
      </div>
    </div>);
  }
};

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};
