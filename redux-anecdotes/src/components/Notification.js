import React from 'react'


const Notification = ({store}) => {

  const { notification } = store.getState();
  console.log(notification.message);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  return notification.message ? <div style={style}>{notification.message}</div> : <div></div>;
};

export default Notification