import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ActionTypes } from "../../redux/Actiotypes";
import My_Profile from "../pages/My_Profile";
import Editotrs from "../../components/Forms/Editors";

const Addbugs = () => {
  const history = useNavigate();
  const [addData, setAdd] = useState("");
  const [inputstates, setState] = useState({
    usertype: "",
    name: "",
    title: "",
    discrip: "",
    image: "",
    id: new Date().getTime(),
  });

  const [errors, setErrors] = useState();
  let dispatch = useDispatch();
  const { id, usertype, name, title, discrip, images } = inputstates;

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
        console.log("hello");
        setState("");
      });
      // dispatch(AddUsers());
    };
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("image link", e.target.files[0].name);
      // const imgurl = window.URL.createObjectURL(e.target.files[0])
      // console.log("imgurl=====>",e.target.files[0].name);
      setState({ ...inputstates, images: e.target.files[0].name });
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !title || !usertype || !id || !discrip) {
      setErrors("Please add data");
    } else {
      dispatch(AddUser(inputstates));
      setErrors("");
      history("/mainform");
      //   console.log(dispatch(AddUser(inputstates)));
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
            {<My_Profile />}
          </form>
        </div>
      </nav>
      {/* input tickets */}
      <form onSubmit={handlesubmit} className="container">
        <div className="mb-3  ">
          <label className="form-label"> Status Type:</label>
          <select
            name="usertype"
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
        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input
            name="name"
            onChange={handleinputchange}
            value={name || ""}
            className="form-control"
            placeholder="Enter your Name"
            rows="3"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
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

        <label className="form-label m-3 "  >Link:</label>
        <input
          type="file"
          onChange={(e) => imageChange(e)}
          placeholder="select image"
        />
        {
          <Editotrs
            setState={setState}
            addData={addData}
            inputstates={inputstates}
            setAdd={setAdd}
          />
        }
        <div className="container-fluid text-center mt-4">
          <button type="submit" className="btn btn-success">
            Add to list
          </button>
        </div>
      </form>
    </div>
  );
};
export default Addbugs;
