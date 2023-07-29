import React from 'react';
import './Button.css'; // Update the import path to reference the correct CSS file

 const Button=(props) =>{
  console.log('Button Componant Is Running');
  return (
    <div>
      <button onClick={props.onClick} className='button'
      type={props.type || 'button'} disabled={props.disabled}>
       {props.children}</button>
    </div>
  )
}
export default React.memo(Button);