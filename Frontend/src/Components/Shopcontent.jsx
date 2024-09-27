import React, { useState, useEffect } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Switch, Space, message, Alert } from "antd";
import { useCount } from "../CountContext";
import { useProductCounts } from "../ProductCountsProvider";
import { useWish } from "../WishContext";
import { useCart } from "../CartContext";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Shopcontent = () => {
  const pictures = [
    "Specs1.png",
    "Specs2.png",
    "Specs3.png",
    "Specs4.png",
    "Specs5.png",
    "Specs6.png",
  ];
  const prodnames = [
    "Breezy Gaze",
    "Nimble Vision",
    "Lithe lenses",
    "Floating Frames",
    "Effortless Elegance",
    "Light Special",
  ];
  // const [productCounts, setProductCounts] = useState(Array(pictures.length).fill(0));
  const { productCounts, setProductCounts } = useProductCounts();
  const { count, setCount } = useCount(0);
  const { wish, setWish } = useWish();
  const [messageApi, contextHolder] = message.useMessage();
  const { cart, addToCart, setCart } = useCart();
  const {login, yeslogin} = useAuth() 
  const navigate = useNavigate()
  const [productdetails, setproductdetails]= useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost/Server/getproduct.php");
        setproductdetails(res.data);
        console.log(productdetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };
  
    fetchData();
  },[]);

  const increase = (index) => {
    const newCounts = [...productCounts];
    newCounts[index]++;
    setProductCounts(newCounts);
    console.log(productCounts);
  };

  const decline = (index) => {
    const newCounts = [...productCounts];
    newCounts[index] = Math.max(newCounts[index] - 1, 0);
    setProductCounts(newCounts);
    // setCount(newCounts[index])
  };
  const [notadded, setnotadded] = useState(false);
  // const [addtocartindex, setaddtocartindex] =useState([]);
  // const [yeslogin, setyeslogin ] = useState(false)
  console.log(yeslogin);
  const addtoCart = async (picture,name,cost, id) => {
    const newCounts = [...productCounts];
    if (newCounts[id] !== 0) {
      if(yeslogin){
        setCount(() => {
          var sum = 0;
          for (var i = 0; i < newCounts.length; i++) {
            sum = sum + newCounts[i];
          }
          console.log(newCounts);
          // setaddtocartindex((prevValue) => [...prevValue, id]);
          messageApi.open({
            type: "success",
            content: "Added to Cart",
          });
          return sum;
        });
      }
      else{
        navigate("/login")
      }
      
  
      // Check if the product is already in the cart
      const existingCartItemIndex = cart.findIndex((item) => item.prodnam === name);
  
      // If the product is already in the cart, update the quantity
      if (existingCartItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingCartItemIndex] = {
          ...updatedCart[existingCartItemIndex],
          quantity: newCounts[id],
        };
        // Update the cart with the modified item
        setCart(updatedCart);
      } else {
        // If the product is not in the cart, add it as a new item
        const newItem = {
          image: picture,
          prodnam: name,
          price: cost,
          quantity: newCounts[id],
        };
        addToCart(newItem);
      }
    } else {
      setnotadded(true);
      setTimeout(() => {
        setnotadded(false);
      }, 2500);
    }
  };
  
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const addWish = (data, id) => {
    setWish((prevValue) => {
      return [...prevValue, { image: data, prodnam: prodnames[id] }];
    });
    messageApi.open({
      type: "success",
      content: "Added to Wishlist",
    });
  };
  useEffect(() => {
    console.log(wish);
  }, [wish]);
  
  return (
    <div className="shop">
      {contextHolder}
      {
        productdetails.length>0?
        (productdetails.map((data, id) => (
        <div className="specsadd" key={id}>
          <img src={`${data.productimage}`} alt="Image" />
          <Button.Group>
            <Button
              className="qtybtn"
              onClick={() => decline(id)}
              icon={<MinusOutlined className="symbol" />}
            />
            <p>{productCounts[id]}</p>
            <Button
              className="qtybtn"
              onClick={() => increase(id)}
              icon={<PlusOutlined className="symbol" />}
            />
          </Button.Group>
          <h5>Rs {data.productprice}</h5>
          <h4>{data.productname}</h4>
          <div className="shopbtns">
            <button onClick={() => addWish(data, id)}>♡ Wishlist</button>
            {/* <button className='adtc addtocart' onClick={addtoCart}>Add to Cart</button> */}
            <button
              style={{ backgroundColor: "black", color: "#fff" }}
              onClick={() => addtoCart(data.productimage, data.productname,data.productprice,id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))):"Loading..."
      }
      
      {notadded==true ? (
        <Alert
          style={{
            position:"absolute",
            top:"20"
          }}
          message="No quantity"
          description="Please enter quantity"
          type="error"
         
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Shopcontent;
