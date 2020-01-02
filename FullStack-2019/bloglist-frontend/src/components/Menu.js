import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  const padding = { padding: 5 };

  return (
    <div className="MenuDiv">
      <Link style={padding} to="/">Home</Link>
      <Link style={padding} to="/users">Users</Link>
      <Link style={padding} to="/createNew">New Post</Link>
      <hr/>
    </div>
  )

};

export default Menu
