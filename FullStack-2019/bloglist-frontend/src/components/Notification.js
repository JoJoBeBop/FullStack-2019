import React from 'react';
import { connect } from 'react-redux';
import "../index.css";

const Test = ({notification}) => {
  return notification.message ? <div className="error">{notification.message}</div> : <div></div>;
};

const mapStateToProps = state => {
  return {
    notification: state.notification,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Test);
export default ConnectedNotification;