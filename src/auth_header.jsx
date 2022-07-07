// Funtion that returns the Authorization headers
export default function authHeader(user) {
  return {
    Authorization: `Bearer ${user.token}`,
  };
}
