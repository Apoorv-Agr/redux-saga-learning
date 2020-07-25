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
