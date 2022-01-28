import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../db.json";
function LoginForm() {
  const datas = Data.signup;    //data from db.json
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { email, password } = state;
  const history = useNavigate();

  const handlechange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter  Password");
    } else if (!email) {
      setError("Please enter Email ");
    } else {
      datas?.map((ele) => {
         if (ele.email === state.email && ele.password === state.password) 
         {
           history("/adduser")
          sessionStorage.setItem("username", ele.username);
          sessionStorage.setItem("user type", ele.user_type);
          sessionStorage.setItem("email", ele.email);
          document.title = `${sessionStorage.getItem("username")}`;
           }
           return true;
      });
    }

    setState("");
    setError("Please enter valid Email and Password");
  };

  return (
    <div className="container bg-secondary ">
      <div className=" bg-secondary text-center heights">
        <form onSubmit={handlesubmit}>
          <h6 className="badge fs-3">Log In</h6>
          <div className=" container-fluid bg-light  text-center ">
            {error && <h5 className="text-danger">{error}</h5>}
          </div>
          <br></br>
          <div className=" badge  mb-3 text-start fs-6 ">
            <label className="form-label">Email address:</label>

            <input
              type="email"
              onChange={handlechange}
              value={email || ""}
              name="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <br></br>

          <div className=" badge  mb-3 text-start fs-6 ">
            <label className="form-label">Passward:</label>
            <input
              name="password"
              value={password || ""}
              onChange={handlechange}
              type="password"
              autoComplete="password"
              className="form-control"
              placeholder="Enter your Passward"
            />
          </div>
          <div className="container-fluid  ">
            <button type="submit" className="btn btn btn-light p-2 m-3 ">
              Log In.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
