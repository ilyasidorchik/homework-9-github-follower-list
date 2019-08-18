import { takeLatest, select, call, put, fork } from 'redux-saga/effects';

import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getFollowersInfo } from './api';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  const apiKey = yield select(getApiKey);

  try {
    const result = yield call(getFollowersInfo, apiKey, action.paylod);
    yield put(fetchSuccess(result));
  }
  catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}