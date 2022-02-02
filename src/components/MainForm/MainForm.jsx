import { Link } from "react-router-dom";
import React, { useState } from "react";
import MyProfile from "../pages/My_Profile";
import Issuelist from "./Issuelist";
import List from "../../db.json";
import Filteusername from "./filteusername";
import FilterByBug from "./Filterbybug";
function MainForm() {
  const lists = List.user;
  const [items, setItems] = useState(lists);
  var issue = sessionStorage.getItem("user type");   //issuetype from session storage
  
  const allitems = (type) => {                    //show all data using filter....
    const updatedItem = lists.filter((curele) => {
      return curele.issuetype !== type;
    });
    setItems(updatedItem);                      //calling setitems  in order to display data...
  };
  const filteruser=(type)=>{
    const updatedItem = lists.filter((curele) => {
      return curele.name === type;
    });
    setItems(updatedItem);  
  }
  
  const filterItem = (type) => {                //filtering each data according to parameter passed
    const updatedItem = lists.filter((curele) => {
      return curele.issuetype === type;
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
            
            <FilterByBug filterItem={filterItem} allitems={allitems} />
            <Filteusername filteruser={filteruser} />
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
            {<MyProfile></MyProfile>}
          </form>
        </div>
      </nav>

      <div className="container-fluid ">
        <div className="container-fluid">
          <div className="container">
            {(issue==="Admin")? "":
              <div className="container-fluid text-end mt-3 ">
               <Link to={"/adduser"}> <button type="button" className="btn btn-success">
                Add New Bugs 
                </button></Link>
              </div>
           }
          </div>
        </div>
      </div>
      <Issuelist itemlist={items} lists={lists}/>
    </div>
  );
}

export default MainForm;
