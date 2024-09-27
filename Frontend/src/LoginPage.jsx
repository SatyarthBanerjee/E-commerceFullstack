import React, { useState } from 'react'
import Logindialog from './Components/Logindialog'
import CreateAccdialog from './Components/CreateAccdialog';
import AdminLogin from './AdminLogin';
const LoginSys = () => {
  const [createclick, setcreateclick] = useState(false);
  // const [adminclick, setadminclick] = useState(false);
  const togglelogcre=()=>{
    setcreateclick(!createclick);
  }
  return (
    <div className='loginpage'>
    {!createclick?
      <Logindialog handleCreate={togglelogcre}/>:
      <CreateAccdialog handleLogin={togglelogcre} /> 
      
    }
    
      

    </div>
  )
}

export default LoginSys
