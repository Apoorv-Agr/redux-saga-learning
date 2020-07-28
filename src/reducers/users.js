import { Types } from "../constants";

const INITIAL_STATE = {
  items: [],
  ShowLoader: true,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...INITIAL_STATE,
        items: action.payLoad.items,
        ShowLoader: false,
      };
    default:
      return { ...INITIAL_STATE, ShowLoader: true };
  }
}
