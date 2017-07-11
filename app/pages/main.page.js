import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.action";
import PropTypes from "prop-types";
import "./stylesheets/style.scss";

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.action();
  }
  render() {
    return (
      <h1>
        {this.props.message}
      </h1>
    );
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(mapStateToProps, actions)(Main);
