
import { useMemo, useState } from 'react';
import './App.css';
import Button from './Componant/UI/Button';
import DemoOutput from './Componant/UI/Demo/DemoOutput';
import { useCallback } from 'react';

function App() {
  const[title,setTitle]=useState('MY LIST');
 
  console.log('App Componant Started Executing');

  const changeHandler=useCallback(()=>{
  
    setTitle('SORTED LIST')
  },[]);
  
 
  return (
    <div className="App">
   {/* <h2 className='heading'> Welcome </h2> */}
  <DemoOutput title={title} items={useMemo(()=>
  [1,3,15,7,9],[])}/>
  <Button onClick={changeHandler}>CHANGE TITLE!</Button>
  

    </div>
  );
}

export default App;
