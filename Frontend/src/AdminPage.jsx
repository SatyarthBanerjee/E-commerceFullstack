import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import AdminPageCont from './Components/AdminPageCont'

const AdminPage = () => {
    const [dashboard, setdashboard] = useState(false);
    useEffect(()=>{
        setdashboard(true)
    },[])
  return (
    <>
        <Navbar dash={dashboard}/>
        <AdminPageCont />
        
    </>
  )
}

export default AdminPage
