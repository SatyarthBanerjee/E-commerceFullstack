import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
// import axios from "axios";
import { useAuth } from "../AuthContext";
const Logindialog = ({ handleCreate }) => {
    const {login, setyeslogin} = useAuth();
    const navigate = useNavigate()
    const [name, setName] =useState("")
    const [details, setDetails]= useState({
      email:"",
      password:"",  
    })
    // const [success, setSuccess]= useState(false);
    const handleSuccess =async(res)=>{
      setyeslogin(true)
      const decoded = await jwtDecode(res.credential)
      console.log((decoded));
      setName(decoded.name);
      navigate("/shop");
     
  }

    const handleChange =(name,value)=>{
      setDetails((prevValue)=>({
        ...prevValue,[name]:value
      }))
    }
    // const handleLogin =(e)=>{
    //   e.preventDefault();
    //   console.log(details);
    // }
    useEffect(()=>{
        console.log(name);
    },[name])

    const handleLogin = async (details) => {
      const success = await login(details);
      if (success) {
        navigate("/shop");
        console.log(success);
      }
    };
    const handleAdmin=()=>{
      navigate('/login/adminlogin');
    }
  return (
    <div className="login">
      {/* <h1>{name}</h1> */}
      <h1>Login</h1>
      <div className="logincont">
        <>
          <p>Email or Username</p>
          <input onChange={(e)=>handleChange("email", e.target.value)} value={details.email} type="text"></input>
        </>
        <>
          <p>Password</p>
          <input onChange={(e)=>handleChange("password", e.target.value)} value={details.password} type="password"></input>
        </>
        <button className="loginbtn" onClick={()=>handleLogin(details)}>Login</button>
        <GoogleLogin 
            onSuccess={handleSuccess}
        />
      </div>
      <div style={{display:"flex", gap: "10px"}}>
        <p style={{cursor:"pointer", fontSize:"12px", fontWeight:"bolder"}} onClick={handleCreate}>Create account?</p>
        <p>Or login as <span onClick={handleAdmin} style={{fontWeight:"bold", cursor:"pointer"}}>Admin</span></p>
      </div>  
      
    </div>
  );
};

export default Logindialog;
