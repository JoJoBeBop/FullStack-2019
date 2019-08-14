import React from 'react';

const Notification = (notification) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  return notification.notification ? <div style={style}>{notification.notification}</div> : <div> </div>;
};

export default Notification