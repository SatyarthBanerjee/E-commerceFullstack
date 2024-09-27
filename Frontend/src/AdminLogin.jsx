import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const admindetails = [{
    username: 'admin1',
    password: 'admin123'
  },
  {
    username:"admin2",
    password:"admin321",
  }
]
  const [admdet, setadmdet] =useState({
    username:"",
    password:""
  })
  const handleChange =(value,name)=>{
    setadmdet((prevValue)=>({
      ...prevValue,[name]:value,
    }))
  }
  const handleSubm =()=>{
    const foundadmin = admindetails.find(admin=>admin.username===admdet.username && admin.password===admdet.password)
    if(foundadmin){
      navigate("/adminpage")
      alert("Login success");
    }
    else{
      alert("Sorry")
    }
    // console.log(admindetails.find(det));
    
  }
  return (
    <div className="adminlogin">
      <div className="admloginbox">
        <h1>Admin Login</h1>
        <div className="admlogboxcont">
          <div>
            <p>Admin username</p>
            <input onChange={(e)=>handleChange(e.target.value,"username")} value={admdet.username} type="text"></input>
          </div>
          <div>
            <p>Password</p>
            <input onChange={(e)=>handleChange(e.target.value,"password")} value={admdet.password} type="password"></input>
          </div>

          <button onClick={handleSubm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
