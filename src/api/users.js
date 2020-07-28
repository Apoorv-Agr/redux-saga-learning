import axios from "axios";

export const getUsersApi = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUserApi = ({ firstName, lastName }) => {
  return axios.post("/users", {
    firstName,
    lastName,
  });
};

export const deleteUserAPI = ({ userId }) => {
  return axios.delete(`/users/${userId}`);
};
