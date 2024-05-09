import React from 'react'
import img from '../component/image/figmalogo.jpg'
export const Navbar = () => {
  return (
  
     <div className="nav" >
    
    <div className='image1'>
     <img src={img} alt="img1"/>
    </div> 
    <div className="logo1">  
    <div>About</div>
    <div>Portfolio</div>
    <div>Contact</div>
    </div>
    <input className='search' placeholder='   search...... ' ></input>
   
    
   </div>
  
   
  )
}
