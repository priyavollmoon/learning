import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "increment":
            return{  count:state.count+1};
        case "decrement":
            return{count:state.count-1};
        default:
            return state;
    }
}
function UseReducer() {
    const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
        <h3>count:{state.count}</h3>

        <button onClick={()=>dispatch({type:"increment"})}>add count</button>
        <button onClick={()=>dispatch({type:"decrement"})}>reduce count</button>
        
    </div>
  )
}

export default UseReducer