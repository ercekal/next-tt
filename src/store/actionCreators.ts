import axios from 'axios'
import { Dispatch } from 'redux'

export type Action = GetResultsAction | ReturnType<typeof getResultsSuccess | typeof getResultsFailed>

export type GetResultsAction = {
  type: typeof GET_RESULTS_REQUEST
  payload: string
}

export const GET_RESULTS_REQUEST = 'GET_RESULTS_REQUEST'
export const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS'
export const GET_RESULTS_FAILED = 'GET_RESULTS_FAILED'

export const getResults = (searchText: string) => async (dispatch: Dispatch) => {

  const res = await axios.get(` https://itunes.apple.com/search?term=${searchText}`)

  if (res.status === 200) {
    return dispatch(getResultsSuccess(res.data))
  } else {
    return dispatch(getResultsFailed(res.statusText))
  }
}

const getResultsSuccess = (results: []) => ({
  type: GET_RESULTS_SUCCESS as typeof GET_RESULTS_SUCCESS,
  results
})

const getResultsFailed = (error: string) => ({
  type: GET_RESULTS_FAILED as typeof GET_RESULTS_FAILED,
  error
})

export const actions = { getResults, getResultsSuccess, getResultsFailed }

// import * as actionTypes from './actionTypes';

// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article
//   };

//   return simulateHttpRequest(action);
// }

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article
//   };
//   return simulateHttpRequest(action);
// }

// export function simulateHttpRequest(action: ArticleAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action);
//     }, 500);
//   };
// }
