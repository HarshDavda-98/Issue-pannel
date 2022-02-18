import React,{useState ,useEffect } from 'react'
import axios from 'axios';
import {API} from '../../Api'
export default function Lists() {
    const [listdata,setListData]=useState();
useEffect(()=>{
    axios.get(`${API}posts/bugs`)
    .then((res)=>{
        setListData(res.data);
        // console.log(res.data)
    })
    .catch((err)=>{console.log("This is error for :",err)});
},[]);
const dats = listdata?.map((ele,index)=>(ele.name));
// console.log(dats);
  return <>
      <p>Email:{dats}
          {/* <th>UserName</th> */}
          {/* <th>Pwd</th> */}
          {/* <th>UserType</th> */}
      </p>
      
      
  </>;
}
