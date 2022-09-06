import axios from "axios";

const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://0.0.0.0:4000/api/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const userRegister = (username, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://0.0.0.0:4000/api/auth/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export { userLogin, userRegister };
