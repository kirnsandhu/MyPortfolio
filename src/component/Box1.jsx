import React from 'react'
import img from '../component/image/kirn2.jpg'
export const Box1 = () => {
  return (
    <div>
      <div className='page1clr'>

      <div className='page1'>
      <h3 className='iam'>I'M</h3>
      <h1 className='name'>Kiran Sandhu</h1>
      <p>Full Stack Developer</p>
      <div className='contactme'>
      <h2 className='cont'>Contact Me</h2>
      </div>
      </div>
      
      <div className='img1'>
      <img src={img} alt="img1" />

    </div>
    </div>
    </div>
  )
}
