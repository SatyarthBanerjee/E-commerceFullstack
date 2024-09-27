import React, { useState } from 'react'
import axios from 'axios'
const AdminPageCont = () => {
    const [productdet, setproductdet] = useState({
        productname: "",
        productprice:"",
        productdesc:"",
        productimage:""
    })
   const handleChange =(value,name)=>{
        setproductdet((prevValue)=>({
            ...prevValue,[name]:value
        }))
   }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost/Server/createproduct.php", productdet)
        const data = res?.data;
        if(data?.success){
            alert('Product added successfully')
        }
        else{
            alert('Something went wrong!')
        }
    }
    catch(error){
        console.log(error);
    }
  
   }
  return (
    <div className='adminpagecont'>
      <div className='addproductform'>
        <h1>Add Products</h1>
        <div className='productformcont'>
        <div>
            <p>Product Name</p>
            <input onChange={(e)=>handleChange(e.target.value,"productname")} value={productdet.productname} type='text'></input>
        </div>
        <div>
             <p>Product Price</p>   
             <input onChange={(e)=>handleChange(e.target.value,"productprice")} value={productdet.productprice} type='number'></input>
        </div>
        <div>
             <p>Product description</p>
             <input onChange={(e)=>handleChange(e.target.value,"productdesc")} value={productdet.productdesc}type='text'></input>
        </div>
        <div>
             <p>Product image URL</p>
             <input onChange={(e)=>handleChange(e.target.value,"productimage")}value={productdet.productimage} type="text"></input>
        </div>
        
            <button onClick={handleSubmit}>Add Product</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPageCont
