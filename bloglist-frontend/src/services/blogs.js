import axios from 'axios'
const baseUrl = '/api/blogs';

let token = null;

const setToken = newToken =>{
  token = `bearer ${newToken}`
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  };

  console.log(config);

  const response = await axios.post(baseUrl, newObject, config);
  console.log(response);
  return response.data
};

const update = ( blog, newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.put(`${baseUrl}/${blog.id}`, newObject, config);
  return request.then(response => response.data)
};

const remove = (blog) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.delete(`${baseUrl}/${blog.id}`, config);
  return request.then(response => response.data)
};

export default { getAll, create, update, setToken, remove }
