import axios from "axios";
const baseUrl = "/api/login";
const usersUrl = "/api/users";


const login = async credentials => {
  const response = await axios.post(baseUrl, credentials);
  console.log(response);
  return response.data;
};

const getAllUsers = async () => {
  console.log("get");
  const response = await axios.get(usersUrl)
  return response.data
};

export default { login, getAllUsers };