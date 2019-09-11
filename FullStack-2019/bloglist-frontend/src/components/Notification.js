import React from 'react';
import {connect} from 'react-redux';
import "../index.css";
import {Message} from 'semantic-ui-react'


const Test = ({notification}) => {
  return (notification.message ?
    <Message color="blue">
      {notification.message}
    </Message>
    : <div></div>);

};

const mapStateToProps = state => {
  return {
    notification: state.notification,
  };
};

const ConnectedNotification = connect(mapStateToProps)(Test);
export default ConnectedNotification;