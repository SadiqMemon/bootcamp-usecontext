import React, { useState } from 'react';
import './App.css';
import Parent from './parent'
import ValueContext from './ValueContext';

/*let[number, setNumber]=useState(40)
  <Parent num = {number}></Parent>
  <button onClick={()=> {setNumber(++number)}} > update Number </button>*/

function App() {
  //     variable  function 
  //let [value[0], value[1]]=useState (48)
  let value = useState(48);

  return (
    <ValueContext.Provider value={value}>
  <div>
    <Parent> </Parent>
  </div>
  </ValueContext.Provider>
  );
}
export default App;
