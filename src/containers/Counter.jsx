import React from "react";
import {List} from "immutable";
import {Link} from "react-router";
import {connect} from "react-redux";
import actions from "../actions";
import AcionTypes from "../constants/ActionTypes";
import store from "../store";

require("./Counter.scss");


class Counter extends React.Component{

  componentDidMount() {
    document.title = "Counter";
  }

  handleClick() {
    actions.addCounter();
  }

  render() {
    return (<div className="fullbleed Counter" onClick={this.handleClick}>
      <div>{this.props.counter}</div>
    </div>);
  }
};

Counter.propTypes = {
  counter: React.PropTypes.number,
  addCounter: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
