import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { ActionTypes } from "../../redux/Actiotypes";
import {loadUsers,signUsers} from '../../redux/Action'

function Signup() {
  const history = useNavigate();
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const [states, setState] = useState({
    id: new Date().getTime(),
    username: "",
    user_type: "",
    email: "",
    password: "",
    re_password: "",
  });
  useEffect(()=>{
    dispatch(loadUsers())
    dispatch(signUsers())
},[dispatch]);
  const { email, password, re_password, username, user_type } = states; 
  const listss =useSelector(state=>state.data.user)     //using state from store
  const user = listss?.find(user => user.email === states.email); //check if input email === db.json email
  console.log(listss)
  // console.log(user)
  const onchangehandler = (e) => {
    let { name, value } = e.target;
    setState({
      ...states,
      [name]: value,
    });
  };
  const signUp = () => ({
    type: ActionTypes.SIGN_UP,
  });

  const Signupdata = (states) => {
    return function (dispatch) {
      axios
        .post("http://localhost:5100/signup", states)
        .then(function (res) {
          dispatch(signUp(res.data));
          setState("");
        })
        .catch(function (err) {
        });
    };
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !re_password || !username || !user_type) {
      setErrors("Please add all data ");
    }
    if (states.password !== states.re_password) {
      setErrors("Please check New password .....");
    }
    if(user){
      setErrors("Please enter another Email address .....");
    }
    else {
          setErrors("");
          history("/");
          dispatch(Signupdata(states));
    }
  };
  return (
    <React.Fragment>
      <div className="container bg-secondary  ">
        <nav className=" container-fluid navbar navbar-dark bg-dark">
          <div className="container-fluid ">
            <p className="navbar-brand">Issue to Debug</p>
            <form className="d-flex ">
              <Link to={"/"}>
                <button className="btn btn-outline-light  m-2" type="button">
                  Main Page
                </button>
              </Link>
            </form>
          </div>
        </nav>
        <div className=" bg-secondary text-center">
          <div className="border ">
            <h6 className="badge fs-2">Sign Up</h6>
            <form onSubmit={handlesubmit}>
              <div>
                <div className="  badge  mb-5  text-start fs-6 ">
                  <label className="form-label   ">User Type:</label>
                  <select
                    name="user_type"
                    onChange={onchangehandler}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>--select--</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <br></br>

                <div className=" badge  mb-3 text-start fs-6 ">
                  <label className="form-label">Email address:</label>
                  <input
                    value={email || ""}
                    onChange={onchangehandler}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <br></br>

                <div className=" badge  mb-3 text-start fs-6 ">
                  <label className="form-label">User Name:</label>
                  <input
                    value={username || ""}
                    onChange={onchangehandler}
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Enter user name "
                  />
                </div>

                <br></br>
                <div className="form-group">
                  <div className=" badge  mb-3 text-start fs-6 ">
                    <label className="form-label"> Passward:</label>
                    <input
                      type="password"
                      autoComplete="password"
                      name="password"
                      onChange={onchangehandler}
                      value={password || ""}
                      className="form-control"
                      placeholder="Enter your Passward"
                    />
                  </div>
                  <br></br>
                  <div className=" badge  p-2 text-start fs-6 ">
                    <label className="form-label">Confirm Passward :</label>
                    <input
                      type="password"
                      autoComplete="password"
                      value={re_password || ""}
                      onChange={onchangehandler}
                      name="re_password"
                      className="form-control"
                      placeholder="Enter Passward to confirm"
                    />
                  </div>
                </div>
                <div className="container">
                  <button type="submit" className="btn btn btn-light p-2 m-3 ">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=" container-fluid bg-light  text-center ">
          {errors && <h5 className="text-danger">{errors}</h5>}
        </div>
        <div className=" example1 container-fluid bg-primary ">
          <h3>
            Fill all the Details and Enter on Register then click on Login .....{" "}
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Signup;
