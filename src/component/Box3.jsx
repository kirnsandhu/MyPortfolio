import React from 'react'
import img1 from '../component/image/Box1c.jpg'
import img2 from '../component/image/Box2c++.jpg'
import img3 from '../component/image/Box2css.jpg'
import img4 from '../component/image/Box2python.jpg'
import img5 from '../component/image/Box2React.jpg'
import img6 from '../component/image/Box2php.jpg'
import img7 from '../component/image/Box2nodejs.jpg'
import img8 from '../component/image/Box2java.jpg'
import img9 from '../component/image/Box2java.jpg'
import img10 from '../component/image/Box2java.jpg'
export const Box3 = () => {
  return (
    <>
     
    <div className='container'>
     
   <h1 className='skills'>My Skills</h1> 
     <div className='Box2line'></div><br />
<div className="Box3">
      <div className="row">
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img src={img4} alt="Image 4" />
      </div><br />
      <div className="row">
        <img src={img5} alt="Image 5" />
        <img src={img6} alt="Image 6" />
        <img src={img7} alt="Image 7" />
        <img src={img8} alt="Image 8" />
      </div><br />
      <div className="row">
        <img src={img9} alt="Image 9" />
        <img src={img10} alt="Image 10" />
        
      </div>
    </div>
    </div>
    </>
  )
}
export default Box3;