import React from "react";

function ModalForUpdate(props) {
  const list = props.showForm
  console.log("This is modal data",list)
  return (
    <>
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content "style={{ width: "50rem"  }}>
            <div className="modal-header">
             
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
            <div className="card container-fluid  bg-info"  style={{ width: "35rem"  }}>
      {/* <img src="..." className="card-img-top" alt="MyProfile" />     */}
      <div className="card-body container">
        <h5 className="card-title text-light fs-2 px-5">{list.name}</h5>
        <hr></hr>

        <ul className="list-group list-group-flush border ">
          <li className="list-group-item">
          
                <p className="card-text">
                  <span className="text-dark fs-4"> Problem related to : </span>
                  <span className="text-danger fs-4 px-2">{list.title}</span>
                </p>
          </li>
          <li className="list-group-item">
          <div className=" container-fluid">
                  <p className="text-dark fs-4 px-2 "> Description: </p>
                  <p
                    className="card-text fs-4 mx-3 "
                    dangerouslySetInnerHTML={{ __html: list.discrip }}
                    />
                </div>
          </li>
          <div className="img-fluid ">
                  {list.images ? (
                    <img
                    src={list.images}
                    className="img-fluid"
                    alt={list.title}
                    />
                    ) : (
                      ""
                      )}
                </div>
        </ul>
      </div>
    </div>
        

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalForUpdate;
