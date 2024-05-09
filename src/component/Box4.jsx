import React from 'react' 
import port1 from '../component/image/port1.jpg'
import port3 from '../component/image/port3.jpg'
import port5 from '../component/image/port5.jpg'
import port4 from '../component/image/port4.jpg'
import port2 from '../component/image/port2.jpg'
import port6 from '../component/image/port6.jpg'
export const Box4 = () => {
  return (
    <>
    <div className='portfolio'>
        <h1>Portfolio</h1>
        <div className='imgbox'>
       <img src={port1} alt="" height={10} width={600}/> 
       <img src={port3} alt="" height={80} width={220}/> 
       <img src={port5} alt="" height={830} width={330}/>
       </div><br />
       <div className='imgbox'>
       <div><img src={port4} alt="" height={330} width={330}/></div> 
       <div><img src={port2} alt="" height={330} width={330}/></div> 
       <div><img src={port6} alt="" height={330} width={330}/></div> 
       </div> 
    </div>
    </>
  )
}
