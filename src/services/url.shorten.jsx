import axios from "axios";
import authHeader from "../auth_header";

const urlShorten = (longUrl, user) => {
  const headers = authHeader(user);
  return new Promise(async (resolve, reject) => {
    try {
      const response = axios.post(
        "http://myaddress:4000/api/shorten",
        { longUrl: longUrl },
        { headers }
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export { urlShorten };
