import { takeEvery, call, put } from "redux-saga/effects";

import { GET_ROUTER } from "../actions/routers";

import { CategoryService } from "../../services/router.service";

import { saveRouterAction } from "../actions/routers";

export function* getRouter(action) {
  const { data } = action.payload;

  try {
    const response = yield call(CategoryService.getAll, data);

    if (response.statusText) {
      yield put(saveRouterAction(response?.data));
    } else {
      throw response;
    }
  } catch (error) {
    console.log("Ошибка добавления соавтора");
  }
}

export function* routerSaga() {
  yield takeEvery(GET_ROUTER, getRouter);
}
