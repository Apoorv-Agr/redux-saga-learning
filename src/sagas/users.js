import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from "redux-saga/effects";
import { Types } from "../constants";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsersApi);

    yield put(
      actions.getUserSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {
    yield put(
      actions.userError({
        error: "An error occurred while trying to get users",
      })
    );
  }
}

function* createUser(actions) {
  try {
    yield call(api.createUserApi, {
      firstName: actions.payLoad.firstName,
      lastName: actions.payLoad.lastName,
    });
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.userError({
        error: "An error occurred while creating the user",
      })
    );
  }
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUserAPI, { userId });
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.userError({
        error: "An error occurred while deleting the user",
      })
    );
  }
}

function* watchCreateNewUserRequest() {
  yield takeLatest(Types.CREATE_NEW_USERS, createUser);
}

function* watchGetUsersRequest() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(Types.DELETE_USER);
    yield call(deleteUser, {
      userId: action.payLoad.userId,
    });
  }
}

const UsersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateNewUserRequest),
  fork(watchDeleteUserRequest),
];

export default UsersSagas;
