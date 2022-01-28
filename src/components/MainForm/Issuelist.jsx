import React from "react";
function Issuelist(props) {
  const Issue = props.itemlist;
  return (
    <div className="row row-cols-1 row-cols-md-1 xg-1 container-fluid ">
      {/* <div className="border border-2" > */}
      {Issue?.map((list) => {
        return (
          <div className="col m-3 p-2" key={list.id}>
            <div className="card">
              <div className="card-body example p-5 m-2">
                <h5 className="card-title text-primary text-center fs-2 "> <span className="text-dark" > User Name:</span> {list.name}</h5>
                <p className="card-text"> <span className="text-dark fs-4" >Problem related to :    </span>
                  <span className="text-danger fs-4 px-2" >{list.title}</span>
                </p>
                <div className="d-flex p-fluid" >
                  <p className="text-dark fs-4 px-2 " > Description: </p>
                  <p className="card-text fs-4 mx-3 " dangerouslySetInnerHTML={{ __html: list.discrip }} />
                </div>
                <div className="img-fluid" >
                  {list.images ? <img src={list.images} className="img-fluid" alt={list.title} /> : ""}
                </div>
                <div className="bg-success fs-4  text-light text-center px-5" >
                  {list.issuetype}
                </div>
              </div>
            </div>
          </div>
        );
      })}
</div>
    // </div>
  );
}
export default Issuelist;
