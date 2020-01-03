import axios from 'axios'
const baseUrl = '/api/blogs'

/*const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
const token = JSON.parse(loggedUserJSON);
console.log(token.token);*/

let token = null

const headers = token => {
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
}

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content, token) => {
  console.log('CREATE')
  const toke = content.token

  const config = {
    headers: { Authorization: `bearer ${toke}` },
  }

  const newObject = {
    title: content.title,
    author: content.author,
    url: content.url
  }

  const response = await axios.post(baseUrl, newObject, config)
  console.log(response)
  return response.data
}

const update = ( blog, newObject) => {
  console.log('up')
  const config = {
    headers: { Authorization: token },
  }

  console.log(config)

  const request = axios.put(`${baseUrl}/${blog.id}`, newObject, config)
  return request.then(response => response.data)
}

const newVote = async (content) => {
  const id = content.id
  const object = { content: content.content, votes: content.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, object)
  return response.data
}

const remove = (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(config)
  const request = axios.delete(`${baseUrl}/${blog.id}`, config)
  return request.then(response => response.data)
}

const comment = async (blogId, blogComment, token) => {
  const response = await axios.post(
    `${baseUrl}/${blogId}`,
    { blogComment },
    headers(token)
  )

  return response.data
}

export default { getAll, create, update, setToken, remove, newVote }
