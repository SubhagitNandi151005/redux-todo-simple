import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber, decrementNumber } from "./actions/actions"
const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <div className='mainContainer'>
      <div className='title'>Increment / Decrement using Redux by Subhajit</div>
      <div className='counterContainer'>
        <button onClick={() => dispatch(decrementNumber(2))}>-</button>
        <input type="text" value={myState}/>
        <button onClick={() => dispatch(incrementNumber(4))}>+</button>
      </div>
    </div>
  )
}

export default App