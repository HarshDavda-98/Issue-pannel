import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {loadUsers} from '../../redux/Action'
function Info() {
    const dispatch = useDispatch()
    const list = useSelector( state=>state.data.users);
    console.log(list);

    useEffect(()=>{
        dispatch(loadUsers())
    },[])

    const lists = list && list?.map((user,index)=>{
        const {id,title,name}=user;
        return (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{id}</td>
            <td>{name}</td>
            <td>{title}</td>
        </tr>
        )
    });


  return <div>
                <Link to ={"/adduser"} >
                    <div className='container-fluid text-end mt-5' >
                         <button type="button"   className="btn btn-success">Add New Bugs</button>
                    </div>
                </Link>
                
               
            <table className="table">
            <thead>
                <tr>
                     <th scope="col">SR no</th>
                     <th scope="col">ID</th>
                     <th scope="col">Name</th>
                     <th scope="col">Title  </th>
                </tr>
            </thead>
            <tbody>
               {lists}
            </tbody>
            </table>
        </div>
}

export default Info;
