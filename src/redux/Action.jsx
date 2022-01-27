import { ActionTypes } from "../redux/Actiotypes";
import axios from "axios";

const getUsers = (users) => ({
  type: ActionTypes.GET_USERS,
  payload: users,
});
// export default getUsers;

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5100/user")
      .then((response) => {
        dispatch(getUsers(response.data));
        console.log("hello");
      })
      .catch((error) => console.log(error));
  };
};
const sihnupUsers = (users) => ({
  type: ActionTypes.SIGN_UP,
  payload: users,
});
// export default sihnupUsers;

export const signUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5100/signup")
      .then((response) => {
        dispatch(sihnupUsers(response.data));
        console.log("hello");
      })
      .catch((error) => console.log(error));
  };
};
