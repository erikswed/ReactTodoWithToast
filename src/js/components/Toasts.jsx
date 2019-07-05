import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "./Toast";
import { removeToast } from "../actions";

const Toasts = ({ actions, toasts }) => {
  const { removeToast } = actions;
  console.log(toasts);
console.log(toasts.toastList);
return null;
};

Toasts.propTypes = {
  actions: PropTypes.shape({
    removeToast: PropTypes.func.isRequired
  }).isRequired,
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeToast }, dispatch)
});

const mapStateToProps = state => ({
  toasts: state.toastsReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);