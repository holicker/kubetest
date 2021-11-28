import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as merchandiseAPI from "../lib/api/merchandise";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [LIST_MERCHANDISE, LIST_MERCHANDISE_SUCCESS, LIST_MERCHANDISE_FAILURE] =
  createRequestActionTypes("merchandiselist/LIST_MERCHANDISE");
const [
  LIST_MERCHANDISE_BY_DOMAIN,
  LIST_MERCHANDISE_BY_DOMAIN_SUCCESS,
  LIST_MERCHANDISE_BY_DOMAIN_FAILURE,
] = createRequestActionTypes("merchandiselist/LIST_MERCHANDISE_BY_DOMAIN");

const [
  SEARCH_MERCHANDISE,
  SEARCH_MERCHANDISE_SUCCESS,
  SEARCH_MERCHANDISE_FAILURE,
] = createRequestActionTypes("merchandiselist/SEARCH_MERCHANDISE");

export const merchandiseList = createAction(
  LIST_MERCHANDISE,
  ({ vendorid }) => ({
    vendorid,
  })
);
export const merchandiseListByDomain = createAction(
  LIST_MERCHANDISE_BY_DOMAIN,
  ({ vendordomain }) => ({
    vendordomain,
  })
);

export const searchMerchandise = createAction(
  SEARCH_MERCHANDISE,
  ({ page, keyword }) => ({
    page,
    keyword,
  })
);

const listMerchandiseSaga = createRequestSaga(
  LIST_MERCHANDISE,
  merchandiseAPI.merchandiseList
);

const listMerchandiseByDomainSaga = createRequestSaga(
  LIST_MERCHANDISE_BY_DOMAIN,
  merchandiseAPI.merchandiseListByDomain
);

const searchMerchandiseSaga = createRequestSaga(
  SEARCH_MERCHANDISE,
  merchandiseAPI.searchMerchandise
);

export function* merchandiseListSaga() {
  yield takeLatest(LIST_MERCHANDISE, listMerchandiseSaga);
  yield takeLatest(LIST_MERCHANDISE_BY_DOMAIN, listMerchandiseByDomainSaga);
  yield takeLatest(SEARCH_MERCHANDISE, searchMerchandiseSaga);
}

const initialState = {
  merchandiselist: null,
  error: null,
};

const merchandiselist = handleActions(
  {
    [LIST_MERCHANDISE_SUCCESS]: (state, { payload: merchandiselist }) => ({
      ...state,
      merchandiselist,
    }),
    [LIST_MERCHANDISE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SEARCH_MERCHANDISE_SUCCESS]: (state, { payload: merchandiselist }) => ({
      ...state,
      merchandiselist,
    }),
    [SEARCH_MERCHANDISE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_MERCHANDISE_BY_DOMAIN_SUCCESS]: (
      state,
      { payload: merchandiselist }
    ) => ({
      ...state,
      merchandiselist,
    }),
    [LIST_MERCHANDISE_BY_DOMAIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default merchandiselist;
