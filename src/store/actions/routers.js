export const GET_ROUTER = "GET_ROUTER";
export const DELETE_ROUTER = "DELETE_ROUTER";
export const SET_ROUTER = "SET_ROUTER";
export const LOAD_ROUTER = "LOAD_ROUTER";
export const ERROR_ROUTER = "ERROR_ROUTER";

export const getRouterAction = (data) => ({
  type: GET_ROUTER,
  payload: {
    data,
  },
});

export const deleteRouterAction = (data) => ({
  type: DELETE_ROUTER,
  payload: {
    data,
  },
});

export const saveRouterAction = (data) => ({
  type: SET_ROUTER,
  payload: {
    data,
  },
});

export const loadRouterAction = () => ({
  type: LOAD_ROUTER,
});

export const errorRouterAction = (data) => ({
  type: ERROR_ROUTER,
  payload: {
    data,
  },
});
