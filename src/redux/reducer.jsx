import { ActionTypes } from "../redux/Actiotypes";

const initialState = {
  users: [],
  user: {},
  // Signup:[],
  loading: true,
};

const userReducers = (state = { initialState }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DATA:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ActionTypes.SIGN_UP:
      return {
        ...state,
        // users:action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducers;
