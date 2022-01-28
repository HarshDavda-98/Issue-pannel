import { Link } from "react-router-dom";
import React, { useState } from "react";
import MyProfile from "../pages/My_Profile";
import Issuelist from "./Issuelist";
import List from "../../db.json";
function MainForm() {
  const lists = List.user;
  const [items, setItems] = useState(lists);

  const allitems = (type) => {                    //show all data using filter....
    const updatedItem = lists.filter((curele) => {
      return curele.usertype !== type;
    });
    setItems(updatedItem);                      //calling setitems  in order to display data...
  };

  const filterItem = (type) => {                //filtering each data according to parameter passed
    const updatedItem = lists.filter((curele) => {
      return curele.usertype === type;
    });
    setItems(updatedItem);                  //calling setitems  in order to display data... 
  };
  return (
    <div className="App container-fluid">
      {/* Navbar start */}
      <nav className=" container-fluid navbar navbar-dark bg-dark p-1">
        <div className="container-fluid ">
          <p className="navbar-brand">Issue to Debug</p>
          <form className="d-flex">
            <Link to={"/"}>
              <button
                onClick={() => {
                  sessionStorage.clear();       //clearing profile data when log out is clicked
                }}
                className="btn btn-outline-light m-2"
                type="button"
              >
                Log Out
              </button>
            </Link>
            <div className="display">
              {/* drop down two */}
              <div className="btn-group dropdown container-lg m-1">
                <button
                  className="btn  dropdown-toggle  btn-outline-light "
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-in"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li className="container border  dropdown-item pp-0">
                    <p
                      onClick={() => allitems("hiiiiiii")}
                      className="  container btn btn-danger"
                    >
                      All Ticket
                    </p>
                  </li>
                  <li className="container border  dropdown-item pp-0">
                    <p
                      onClick={() => filterItem("Bug")}
                      className="  container btn btn-danger"
                    >
                      Bug
                    </p>
                  </li>
                  <li className="container border  dropdown-item ">
                    <p
                      onClick={() => filterItem("Discuss")}
                      className=" container btn btn-info"
                    >
                      Discuss
                    </p>
                  </li>
                  <li className="container border  dropdown-item">
                    <p
                      onClick={() => filterItem("Unconfirmed")}
                      className=" container btn btn-warning"
                    >
                      Unconfirmed
                    </p>
                  </li>
                  <li className="container border dropdown-item ">
                    <p
                      onClick={() => filterItem("Solved")}
                      className=" container btn btn-success"
                    >
                      Solved
                    </p>
                  </li>
                  <li className="container border  dropdown-item ">
                    <p
                      onClick={() => filterItem("In_Progress")}
                      className=" container btn btn-primary"
                    >
                      In Progress
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {<MyProfile></MyProfile>}
          </form>
        </div>
      </nav>

      <div className="container-fluid ">
        <div className="container-fluid">
          <div className="container">
            <Link to={"/adduser"}>
              <div className="container-fluid text-end mt-2 mb-2">
                <button type="button" className="btn btn-success">
                  Add New Bugs
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Issuelist itemlist={items} />
    </div>
  );
}

export default MainForm;
