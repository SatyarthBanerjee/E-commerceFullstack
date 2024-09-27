import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const Content = () => {
  const [count, setCount] = useState(1)
  const [count_1,setCount_1] = useState(0)
  const [clicked, setClicked] = useState(false)
  const descs = ["BREEZY GAZE", "NIMBLE VISION", "LITHE LENSES","FLOATING FRAMES","EFFORTLESS ELEGANCE"]
  const descs_1 = ["COMFY SOCKS 1","COMFY SOCKS 2","COMFY SOCKS 3","COMFY SOCKS 4","COMFY SOCKS 5"]
  const handleprev = (e)=>{
    e.preventDefault();
    if(count!==1 && count_1!==0){
      setCount(count-1);
      setCount_1(count_1-1)
      setClicked(true)
      setTimeout(()=>setClicked(false),800)
    }

   
   
  }
  const handlefwd = (e)=>{
    e.preventDefault();
    if(count!==5 && count_1!==4){
      setCount(count+1);
      setCount_1(count_1+1)
      setClicked(true)
      setTimeout(()=>setClicked(false),800)
    }
    
  }

  const handleBtnClick = (index) => {
    setCount(index);
    setCount_1(index - 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('Swiped!', eventData),
    onSwipedLeft: () => { if(count!==5 && count_1!==4){
      setCount(count+1);
      setCount_1(count_1+1)
      setClicked(true)
      setTimeout(()=>setClicked(false),800)
    }},
    onSwipedRight: () => {
      if(count!==1 && count_1!==0){
        setCount(count-1);
        setCount_1(count_1-1)
        setClicked(true)
        setTimeout(()=>setClicked(false),800)
      }
    },
  });
  const navigate = useNavigate()
  return (
    <div className='content'>
      <div className='carousel'>
        <img className="arrow prev" onClick={handleprev}  alt="" src='/Images/down-arrow.png'></img>
          <div {...handlers} className='carouselcont'>
            <img className={`specsimg floating-element ${clicked ? 'fade-in' : null}`} src={`/Images/keka${count}.png`} alt="" ></img>
          </div>
          <img className="arrow fwd" onClick={handlefwd} alt="" src='/Images/down-arrow.png'></img>
      </div>
      <div className='sliderbtns'>
        {[1, 2, 3, 4, 5].map((index) => (
          <button key={index} className={count === index ? "filler" : ""} onClick={() => handleBtnClick(index)}></button>
        ))}
      </div>
      <div className='description'>
        <h2>{descs_1[count_1]}</h2>
        <button onClick= {()=>navigate("/shop")}className='discoverbtn'>Discover</button>
      </div>
    </div>
  )
}

export default Content
