import React ,{ useMemo } from 'react'
import './DemoOutput.css'

const DemoOutput=(props) =>{
    
      const sortedlist=useMemo(()=>{
            return props.items.sort((a,b)=>(b-a));
    });
   
  return (
    <div>
       <h2 className='heading'>{props.title}</h2>
   <ul>{sortedlist.map((item)=>(
<h3 key={item} className='output'>{item}</h3>
   ))}</ul>
    </div>
  )
}
export default React.memo(DemoOutput);