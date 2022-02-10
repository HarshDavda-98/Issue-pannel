import React,{useState ,useEffect } from "react";
import axios from "axios";
import Updating from "./Updating";
import ModalForUpdate from "./ModalForUpdate";
// import {  useDispatch } from "react-redux";
// import { loadUsers, signUsers } from "../../redux/Action";
function Issuelist(props) {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUsers());
  //   dispatch(signUsers());
  // }, [dispatch]);

  const sign = props.lists;
  // const [mylist,setList]= useState();
  useEffect(()=>{
        axios.get(`http://localhost:5012/posts/bugs`)
 .then((res)=>{
  // props.setRepeat(sign);
})
},[])

const [showeditor ,setShoweditor]=useState(false);
const Issue = props.itemlist;
// console.log("Isslue list value",Issue);
 
  var issue = sessionStorage.getItem("user type");
  var names = sessionStorage.getItem("username") 
  const [showForm, setShowForm] = useState({});
  
  const signup = sign?.find((ele)=>(ele.name===names))
  const userdata = (signup?.name);

  
  const Editdata =(list)=>{
    console.log("Edit:",list);
    setShowForm(list)
    setShoweditor(!showeditor)
  }
 
 
  const showModal =(list)=>{
    // console.log("Edit:",list);
    setShowForm(list)
  }
 
 
 
 
  const DeletBug =async(Id)=>{
     await axios.delete(`http://localhost:5012/posts/bugs/${Id}`)
  }
  
  return (
    
    <div className="row row-cols-1 row-cols-md-1 xg-1 container-fluid ">
  
      {Issue?.map((list) => {
        return (
          <div className="col m-3 p-2" key={list.id}>
            <div className="card">
              
              <div className="card-body example p-5 m-2">
                <h5 className="card-title text-primary text-center fs-2 ">
                  <span className="text-dark"> User Name:</span> {list.name}
                </h5>
                <p className="card-text">
                  <span className="text-dark fs-4"> Problem related to : </span>
                  <span className="text-danger fs-4 px-2">{list.title}</span>
                </p>
                <div className="d-flex p-fluid">
                  <p className="text-dark fs-4 px-2 "> Description: </p>
                  <p
                    className="card-text fs-4 mx-3 "
                    dangerouslySetInnerHTML={{ __html: list.discrip }}
                    />
                </div>
                <div className="img-fluid">
                  {list.images ?(
                   <img
                    src={`http://localhost:5012/uploads/${list.images}`}
                    className="img-fluid"
                    alt={list.title}
                    />
                    ) : (
                      ""
                      )}
                </div>
                <div className="">
                  <div className="mt-2 bg-success fs-4 text-light text-center px-5 my-2">{list.issuetype}</div>
                 { ((list.id === showForm.id) && showeditor)? <Updating setShowForm={setShowForm} showForm={showForm} setShoweditor={setShoweditor } /> :null}
                  <div className=" bg-dark d-flex justify-content-around">
                  <div>{(issue==="Admin")?<button type="button" onClick={()=>Editdata(list)} className="btn btn-primary btn btn-outline-light m-2">Edit </button>:(list.name===userdata) ? <button type="button" onClick={()=>Editdata(list)} className="btn btn-primary btn btn-outline-light m-2">Edit</button>:""}</div>
                  <div>{(issue==="Admin")? <button type="button" onClick={()=>DeletBug(list.id)} className="btn btn-danger btn btn-outline-light m-2">Remove</button>:(list.name===userdata) ? <button type="button" onClick={()=>DeletBug(list.id)} className="btn btn-danger btn btn-outline-light m-2">Remove</button>:""}</div>
                  <button type="button" onClick={()=>{showModal(list)}} className="btn btn-success btn btn-outline-light m-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Show Data </button>                        {/* <ModalForUpdatefunction setShowForm={setShowForm} showForm={showForm} setShoweditor={setShoweditor }  /> */}
                        <ModalForUpdate showForm={showForm}/>
                {/* <button type="button" onClick={()=>Editdata(list.id)} className="btn btn-primary btn btn-outline-light m-2">Edit </button>  */}
                 </div>
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