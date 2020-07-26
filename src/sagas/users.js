import { takeEvery, call, fork, put } from "redux-saga/effects";
import { Types } from "../constants";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsersApi);
    console.log("result : ", result);
    yield put(
      actions.getUserSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const UsersSagas = [fork(watchGetUsersRequest)];

export default UsersSagas;
