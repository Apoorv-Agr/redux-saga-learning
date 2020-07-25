import React from "react";
import { connect } from "react-redux";
import {getUserRequest} from '../actions/users'

function App(props) {
  props.getUserRequest();
  return <div>Hello to Sagas !!!!</div>;
}

export default connect(null,{
  getUserRequest
})(App);
