import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import userService from "../services/login";

const UserList = (props) => {
  console.log(props);

  /*getUsers didn't work*/
  const [users, setUser] = useState(null);
  useEffect(() => {
    userService
      .getAllUsers()
      .then(us => setUser(us))
  }, []);
  console.log(users);


  if (users !== null && props.blogs.length >= 2) {
    console.log(props);
    console.log(users);
    return  (
        <div key={users.id} >

          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Users</TableCell>
              <TableCell>Blogs</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    <Link  to={`/users/${user.id}`} users={user} id={user._id}>{user.username}</Link>
                  </TableCell>
                  <TableCell>{user.blogs.length}</TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        </div>
    );
  }

  return (
    <div>
    </div>
  )

};

const mapStateToProps = (state, props ) => {
  return {
    blogs: state.blogs,
    props: props,
  };
};


const ConnectedUsersList = connect(
  mapStateToProps, null)(UserList);

export default ConnectedUsersList;

