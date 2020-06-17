import React,{useReducer} from 'react';
import ValueReducer from './ValueReducer';

function Child2 () {
           let [state, dispatch] = useReducer(ValueReducer, 10);
         return (
         <div>
           <h3>This is second child value by using UserReducer</h3>
           
           2nd Child Value :{state}
            <br/>
            
            <button onClick = {()=>{dispatch("INCREMENT")}}>Increment Reducer </button>
            <button onClick = {()=>{dispatch("DECREMENT")}}>Decrement Reducer </button>
            
         </div>
  );
}

export default Child2;