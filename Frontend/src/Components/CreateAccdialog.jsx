import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
const CreateAccdialog = ({ handleLogin }) => {
  const [logdetails, setlogdetails] = useState({
    username: "",
    email: "",
    pass: "",
  });
  const handleChange=(key,value)=>{
    setlogdetails((prevValue)=>({
      ...prevValue,[key]: value
    }))
  }
  const {login}= useAuth();
  const handleSubmit = async(det)=>{
    
      const res = await login(det)
      if(res===false){
        handleLogin();
        setlogdetails({
          username: "",
          email: "",
          pass: "",
        })
      }
  
    // catch(error){
    //   alert("Unable to create Account ",error)
    // }
   

  }
  return (
    <div className="createdialog">
      <h1>Create account</h1>
      <div className="createcont">
        <div>
          <p>Name</p>
          <input type="text" value={logdetails.name} onChange={(e)=>{handleChange("username",e.target.value)}}></input>
        </div>
        <div>
          <p>Email</p>
          <input type="text" value={logdetails.email} onChange={(e)=>{handleChange("email",e.target.value)}}></input>
        </div>
        <div>
          <p>Password</p>
          <input type="password" value={logdetails.pass}  onChange={(e)=>{handleChange("pass",e.target.value)}}></input>
        </div>
        <button className="createbtn" onClick={()=>handleSubmit(logdetails)}>Submit</button>
      </div>
      <div className="createfooter">
        <p>Already have an account?</p>
        <p
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={handleLogin}
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default CreateAccdialog;
