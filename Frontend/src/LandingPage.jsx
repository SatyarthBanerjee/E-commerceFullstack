import React from 'react'
import Navbar from "./Components/Navbar";
import Content from './Components/Content';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space } from 'antd';
import { useState } from 'react';
import { useCount } from './CountContext';
const LandingPage = () => {
  // const ButtonGroup = Button.Group;
  const { count, setCount } = useCount();
  // const increase = () => {
  //   setCount(count + 1);
  // };

  // const decline = () => {
  //   let newCount = count - 1;
  //   if (newCount < 0) {
  //     newCount = 0;
  //   }
  //   setCount(newCount);
  // };
  return (
    <>
    <Navbar count={count}/>
    <div className='landing'>
      
      <Content />
      {/* <ButtonGroup>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
          <Button onClick={random} icon={<QuestionOutlined />} />
      </ButtonGroup> */}
    </div>
    </>
  )
}

export default LandingPage
