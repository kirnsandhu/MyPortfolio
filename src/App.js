import React from 'react'
import './App.css';
import './component/Box1.css'
import './component/Box2.css'
import './component/Box3.css'
import './component/Box4.css'
import { Navbar } from './component/Navbar';
import { Box1 } from './component/Box1';
import { Box2 } from './component/Box2';
import { Box3 } from './component/Box3';
import { Box4 } from './component/Box4';

export const App = () => {
  return (
    <>
    <Navbar/>
    <Box1/>
    <Box2/>
    <Box3/>
    <Box4/>
    </>
  )
}

