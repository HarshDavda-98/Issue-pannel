import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ActionTypes } from "../../redux/Actiotypes";
import MyProfile from "../pages/My_Profile";
import Editotrs from "../../components/Forms/Editors";

const Addbugs = () => {
  var issue = sessionStorage.getItem("username"); 
  console.log(issue)
  const history = useNavigate(); // same as link to route the page
  const [addData, setAdd] = useState("");
  const [inputstates, setState] = useState({
    issuetype: "",
    title: "",
    discrip: "",
    name:"",
    id: new Date().getTime(), //for unique id
  });

  const [errors, setErrors] = useState();
  let dispatch = useDispatch(); //for dispatching action
  const { id,name, issuetype, title, discrip } = inputstates; //destructuring inputstate...

  const handleinputchange = (e) => {
    let { name, value } = e.target;
    setState({
      ...inputstates,
      [name]: value,
    }); //input name="name"  name="title"  and thats value={}
  };

  const AddUsers = () => ({
    type: ActionTypes.ADD_DATA,
  });

  const AddUser = (inputstates) => {
    return function (dispatch) {
      axios.post("http://localhost:5100/user", inputstates).then((response) => {
        dispatch(AddUsers());
        setState("");
      });
    };
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // if the length is greater then zero then file is to be added
      setState({ ...inputstates, images: e.target.files[0].name });
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!title ||!name || !issuetype || !id || !discrip) {
      setErrors("Please add data");
    } else {
      dispatch(AddUser(inputstates));
      setErrors("");
      history("/mainform");
    }
  };

  return (
    <div className="App">
      {/* Nav Bar */}
      <nav className=" container-fluid navbar navbar-dark bg-dark m-2">
        <div className="container-fluid ">
          <p className="navbar-brand">Issue to Debug</p>
          <form className="d-flex ">
            <Link to={"/"}>
              <button
                onClick={() => {
                  sessionStorage.clear();
                }}
                className="btn btn-outline-light m-2"
                type="button"
              >
                Log Out
              </button>
            </Link>
            <Link to={"/mainform"}>
              <button className="btn btn-outline-light m-2" type="button">
                Go to list
              </button>
            </Link>
            {<MyProfile />}
          </form>
        </div>
      </nav>
      {/* input tickets */}
      <form onSubmit={handlesubmit} className="container">
        <div className="border border-3 p-4 mt-4">
          <div className="mb-3  ">
            <label className="form-label"> Status Type:</label>
            <select
              name="issuetype"
              onChange={handleinputchange}
              className="form-select"
              aria-label="Default select example"
            >
              <option>select</option>
              <option value="Bug">Bug</option>
              <option value="Discuss">Discuss</option>
              <option value="Unconfirmed">Unconfirmed</option>
              <option value="Solved">Solved</option>
              <option value="In_Progress">In Progress</option>
            </select>
          </div>
          <div className="mb-3 d-flex border border-3  px-2 pt-2">
          <label className="form-label px-2 ">User Name :</label>
          {/* <input
            name="name"
            onChange={handleinputchange}
            value={name || ""}
            className="form-control"
            placeholder="Enter your Name"
            rows="3"
          /> */}
            <input type="checkbox" name="name" value={issue} onChange={handleinputchange} className="form-control form-check-input"/>
        </div>
          <div className="mb-3">
            <label className="form-label">Task Type:</label>
            <textarea
              id="getelement"
              name="title"
              onChange={handleinputchange}
              value={title || ""}
              type="textarea"
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="container text-center">
            {errors && <h1 className="text-danger">{errors}</h1>}
          </div>

          <div className="border  border-3 mb-2 ">
            <label className="form-label m-3 ">Link:</label>
            <input
              type="file"
              onChange={(e) => imageChange(e)}
              placeholder="select image"
            />
          </div>
          {
            <Editotrs
              setState={setState} //passing function setstate as a props
              addData={addData} //passing state value as a props
              inputstates={inputstates} //passing state value as a props
              setAdd={setAdd} //passing function setstate as a props
            />
          }
          <div className="container-fluid text-center mt-4">
            <button type="submit" className="btn btn-success">
              Add to list
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Addbugs;
