import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'


const BlogsList = ({ blogs }) => {


  return (
    <div>
      <h2>Blogs</h2>
      <Table striped celled>
        <Table.Body>
          {blogs.map(blog =>
            <Table.Row key={blog.id}>
              <Table.Cell>
                <Link to={`blogs/${blog.id}`}>{blog.title}, by {blog.author}</Link>

              </Table.Cell>
              <Table.Cell>
                {blog.user.username}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )

}


const mapStateToProps = state => {
  return {
    notification: state.notification,
    blogs: state.blogs,
    user: state.user
  }
}


const ConnectedBlogsList = connect(
  mapStateToProps, null)(BlogsList)

export default ConnectedBlogsList
