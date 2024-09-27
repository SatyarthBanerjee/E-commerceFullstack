import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, Switch, Space , message, Result} from "antd";
import { useCount } from "../CountContext";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useWish } from "../WishContext";
import { useProductCounts } from "../ProductCountsProvider";
import { useCart } from "../CartContext";
import { Login } from "iconsax-react";
import Checkout from "./Checkout";
const Navbar = ({dash}) => {
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const { count,setCount } = useCount(0);
  const { wish, setWish } = useWish();
  const { productCounts, setProductCounts } = useProductCounts();
  const { cart, addToCart, removeCartItem } = useCart()
  const pictures = ["Specs1.png", "Specs2.png", "Specs3.png", "Specs4.png", "Specs5.png", "Specs6.png"];
  const [productCountswish, setProductCountswish] = useState(Array(pictures.length).fill(0));
  const [productCountscart, setProductCountscart] = useState(Array(cart.length).fill(0));
  
  // const [count, setCount] = useState(0)
  const handleClicked = () => {
    setClicked((clicked) => !clicked);
    console.log(clicked);
  };
  const navigate = useNavigate();
  // const handleClose=()=>{
  //   setClicked(false)
  //   console.log(clicked);
  // }
  const [messageApi, contextHolder] = message.useMessage();
  const [active, setActive] = useState("");
  const [isClick, setClick] = useState(false);
  const [wishclick, setwishClicked] = useState(false);
  const handleLiked = () => {
    setLiked(!liked);
  };
  const handleNavigation = (section) => {
    setActive(section);
    console.log(active);
    navigate(`/${section}`);
  };
  const wishClicked = () => {
    setwishClicked(!wishclick);
  };
  const increase = (index) => {
    const newCounts = [...productCountswish];
    newCounts[index]++;
    setProductCountswish(newCounts);
    console.log(productCountswish);
  };

  const decline = (index, qty) => {
    const newCounts = [...productCountswish];
    newCounts[index] = Math.max(newCounts[index] - 1, 0);
    setProductCountswish(newCounts);
    // setCount(newCounts[index])
  };
  const increase_1 = (index) => {
    if (productCountscart.length === 0) {
      return; // Exit the function if the array is empty
    }
  
    // Your existing code for increasing the quantity
    const newCounts = [...productCountscart];
    newCounts[index]++;
    setProductCountscart(newCounts);
  };
  
  const decline_1 = (index) => {
    if (productCountscart.length === 0) {
      return; // Exit the function if the array is empty
    }
  
    // Your existing code for decreasing the quantity
    const newCounts = [...productCountscart];
    newCounts[index] = Math.max(newCounts[index] - 1, 0);
    setProductCountscart(newCounts);
  };
  
  
  const addtoCart = (data, id, prodnames, qty) => {
    // Find the index of the item in the cart, if it exists
    const itemIndex = cart.findIndex((item) => item.prodnam === prodnames);
  
    if (itemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      cart[itemIndex].qty += qty;
    } else {
      // If the item is not in the cart, add it
      addToCart({
        image: data,
        prodnam: prodnames,
        quantity: qty,
      });
    }
    messageApi.open({
      type: "success",
      content: "Added to Cart",
    });
  };

  const removewishlist = (index) => {
    // Create a copy of the current wish list
    const updatedWishList = [...wish];
    // Remove the item at the specified index using splice
    updatedWishList.splice(index, 1);
    // Update the wish list state with the modified list
    setWish(updatedWishList);
  };
  const [cart1, setCart] = useState(false)
  const handleCart =()=>{
    setCart(!cart1)
  }
  const [purchased, setPurchased] =useState(false)
  const handlePurchase=()=>{
    setPurchased(!purchased)
    setTimeout(()=>{
      setPurchased(false)
    },2000)
  }
  // useEffect(()=>{
  //   addToCart((prevValue)=>[...prevValue,{
  //     image: null,
  //     prodnam: null,
  //     quantity: null,
  //   }]);
  // },[purchased])
  const [checkout, setcheckout]= useState(false);
  const handleCheckout =(e)=>{
    e.preventDefault();
    setcheckout(!checkout);
  }
  
  return (
    <div className="nav">
    {contextHolder}
      <div className="navbar">
        <div onClick={()=>handleNavigation("")} className="leftnav">
          {/* <h2 >L I G H T</h2> */}
          <img className="kekalogo" src="/Images/kekalogo.jpeg" alt="" />
        </div>
        <div className="rightnav">
          <ul>
            <li
              className={active === "" ? "activelink" : ""}
              onClick={() => handleNavigation("")}
            >
              <a className={active === "" ? "activetext" : ""} href="#home">
                HOME
              </a>
            </li>
            <li
              className={active === "shop" ? "activelink" : ""}
              onClick={() => handleNavigation("shop")}
            >
              <a className={active === "shop" ? "activetext" : ""} href="#shop">
                SHOP
              </a>
            </li>
            {
              dash?<li className={active === "adminpage" ? "activelink" : ""}
              onClick={() => handleNavigation("adminpage")}>
                <a className={active === "adminpage" ? "activetext" : ""}>DASHBOARD</a>
              </li>:""
            }
            <li 
              className={active === "about" ? "activelink" : ""}
              onClick={() => handleNavigation("about")}>
              <a className={active === "about" ? "activetext" : ""} href="#aboutus">ABOUT</a>
            </li>
            <li onClick={() => handleNavigation("")}>
              <a href="#contact">CONTACT</a>
            </li>
            <img onClick={wishClicked} src="/Images/love.png"></img>
            <Badge count={count}  className="cart" style={{ marginTop: "4px" }}>
              <Avatar
                onClick={handleCart}
                style={{ backgroundColor: "transparent", cursor:"pointer" }}
                size="large"
                icon={<ShoppingCartOutlined style={{ color: "black" }} />}
              />
            </Badge>
            <Login onClick={()=>handleNavigation("login")} className="loginlogo" size="36" color="#000"/>
            <div onClick={handleClicked} className="hamburg">
              <div className="ham"></div>
              <div className="ham"></div>
              <div className={`ham2 ${clicked ? "shorten" : null}`}> </div>
            </div>
          </ul>
        </div>
      </div>
      <div
        className={`hamnav ${
          clicked ? "fade-in-from-right" : "fade-out-to-right"
        }`}
      >
        <ul>
          <li onClick={() => handleNavigation("")}>
            <a href="#home">HOME</a>
          </li>
          <li onClick={() => handleNavigation("shop")}>
            <a href="#shop">SHOP</a>
          </li>
          <li onClick={()=>handleNavigation("about")}>
            <a href="#aboutus">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className={wishclick ? "activewish" : "inactivewish"}>
        <div className="wishclose">
          <h2>Wishlist</h2>
          <img onClick={wishClicked} src="/Images/close (2).png"></img>
        </div>
        <div className="wishlist">
          {wish.map((data, id) => {
            return <div key={id} className="wishlistcont">
              <img src={`/Images/${data.image}`}></img>
              <div className="wishlistcont_1">
                <h4>{data.prodnam}</h4>
                <div style={{marginTop:"2px"}} className="plusminus">
                  <p onClick={()=>decline(id)}>-</p>
                  {productCountswish[id]}
                  <p onClick={()=>increase(id)}>+</p>
                </div>
                <h4 style={{marginTop:"5px"}}>$$$$</h4>
                <button onClick={()=>addtoCart(data.image, id, data.prodnam,productCountswish[id])}>Add to Cart</button>
              </div>
              <div className="removewish">
                <p onClick={()=>removewishlist(id)}>x</p>
              </div>
              
            </div>;
          })}
        </div>
      </div>
      <div className={cart1?"activecart":"inactivecart"}>
        <div className="closecart">
          <img onClick={handleCart} src="/Images/close (2).png" />
        </div>
        {cart.length!==0?
          cart.map((item,index)=>{
          return <div key={index} className="wishlistcont">
              <img src={`${item.image}`}></img>
              <div className="wishlistcont_1">
                <h4>{item.prodnam}</h4>
                <h4 style={{marginTop:"5px"}}>{item.price}</h4>
                <div style={{marginTop:"2px"}} className="plusminus">
                  Quantity:
                  {item.quantity}
                  {/* <p onClick={()=>increase_1(index)}>+</p> */}
                </div>
                {/* <button onClick={addtoCart}>Add to Cart</button> */}
              </div>
              <div className="removewish">
                <p onClick={()=>removeCartItem(index)}>x</p>
              </div>
              
            </div>;
         }):
         <div className="cartemptymsg">
            <p>Cart is Empty</p>
         </div>
        }
        {cart.length!==0?<button onClick={handleCheckout} className="placeorder">Add Contact details and Address</button>:""}
        {
          checkout?<Checkout
          // item = {cart.image} 
          name = {cart.map((item)=>{
            return item.prodnam;
          })}
          qty = {cart.map((item)=>{
            return item.quantity;
          })}
          confirm = {handlePurchase}
          cancelcheck={handleCheckout} />:""
        }
        {/* {cart.length!==0?<button onClick={handlePurchase} className="placeorder">Check Out and Place Order</button>:""} */}
        
      </div>
       {
        purchased?   <Result 
          className="result"
        //  style={{zIndex:"5",position:"absolute",width:"30%", top:"30%", backgroundColor:"#fff", borderRadius:"12px"}}
         status="success"
         title="Successfully Purchased!"
      />:null
      } 
   
    </div>
  );
};

export default Navbar;
