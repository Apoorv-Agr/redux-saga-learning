import { Types } from "../constants/";

export const getUserRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST,
  };
};

export const getUserSuccess = ({ items }) => {
  return {
    type: Types.GET_USERS_SUCCESS,
    payLoad: {
      items,
    },
  };
};

export const createNewUserRequest = ({ firstName, lastName }) => {
  return {
    type: Types.CREATE_NEW_USERS,
    payLoad: {
      firstName,
      lastName,
    },
  };
};

export const deleteUserRequest = (userId) => {
  return {
    type: Types.DELETE_USER,
    payLoad: {
      userId: userId,
    },
  };
};
