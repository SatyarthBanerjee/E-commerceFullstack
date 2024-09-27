import React from 'react'
import { useState } from 'react'
const Checkout = ({cancelcheck,  name, qty, confirm}) => {
    const [userdet, setuserdet]= useState({
        contact:"",
        address:"",
        itemname:"",
        itemqty:""

    })
    const handleChange =(value,name)=>{
        setuserdet((preValue)=>({
            ...preValue,[name]:value
        }))
    }
    const handleSubmit =()=>{
        console.log(name);
        setuserdet((prevValue)=>({
            ...prevValue,itemname:name.map((item)=>{
                return item;
            }),itemqty:qty.map((item)=>{
                return item;
            })
        }))
        console.log(userdet);
        confirm();
    }
  return (
    <div className='addconform'>
      <input onChange={(e)=>handleChange(e.target.value,"contact")} placeholder="contact no." value={userdet.contact}></input>
      <input onChange={(e)=>handleChange(e.target.value,"address")} placeholder="address" value={userdet.address}></input>
      <div className='checkoutbtns'>
        <button onClick={handleSubmit} style={{backgroundColor:"#000", borderStyle:"none", color:"#fff"}}>Place Order</button>
        <button onClick={cancelcheck}>Cancel</button>
      </div>
    </div>
  )
}

export default Checkout
