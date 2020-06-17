import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child () {
  let value = useContext(ValueContext);
  return (
    <div>
       <h3>This is first Child value using by useContext</h3>
       1st Chlid Value : {value}
       <br/>
      
       <button onClick = {()=> {value[1](++value[0])}}> Update Value </button>
    </div>
  );
}

export default Child;