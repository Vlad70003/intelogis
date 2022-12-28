import {
  SET_ROUTER,
  LOAD_ROUTER,
  ERROR_ROUTER,
  DELETE_ROUTER,
} from "../actions/routers";

const initialState = {
  router: null,
  loadRouter: false,
  errorRouter: null,
};

export default function routerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTER: {
      return {
        errorRouter: false,
        loadRouter: false,
        router: action.payload,
      };
    }
    case DELETE_ROUTER: {
      return {
        ...state,
        router: null,
      };
    }
    case LOAD_ROUTER: {
      return {
        ...state,
        errorRouter: false,
        loadRouter: true,
      };
    }
    case ERROR_ROUTER: {
      return {
        ...state,
        errorRouter: action.payload,
        loadRouter: false,
      };
    }
    default:
      return state;
  }
}
