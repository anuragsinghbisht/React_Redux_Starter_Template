import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.action";
import PropTypes from "prop-types";
import "./stylesheets/style.scss";

const mapStateToProps = state => {
  return {
    message: state.message,
    loading: state.loading,
    error: state.error
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.action();
  }
  renderLoading() {
    return <p>loading</p>;
  }
  renderError() {
    return (
      <p>
        {this.props.error.appError}
      </p>
    );
  }
  render() {
    if (this.props.loading.appLoading) {
      return this.renderLoading();
    }
    if (this.props.error.appError) {
      return this.renderError();
    }
    return (
      <h1>
        {this.props.message}
      </h1>
    );
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  loading: PropTypes.object,
  error: PropTypes.object
};

export default connect(mapStateToProps, actions)(Main);
