import React from "react";

function Profiledata() {
  var usertype = sessionStorage.getItem("user type");
  var email = sessionStorage.getItem("email");
  var username = sessionStorage.getItem("username");
  document.title = `${username}`;
  return (
    <div className="card container-fluid " style={{ width: "18rem" }}>
      {/* <img src="..." className="card-img-top" alt="MyProfile" />     */}
      <div className="card-body container">
        <h5 className="card-title text-primary fs-2">Your Profile.</h5>
        <hr></hr>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            UserType:<span className="text-primary mx-3 ">{usertype}</span>
          </li>
          <li className="list-group-item">
            UserName:<span className="text-primary mx-3 ">{username}</span>
          </li>
          <li className="list-group-item">
            Email:<p className="text-primary mt-2">{email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Profiledata;