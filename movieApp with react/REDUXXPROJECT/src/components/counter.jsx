import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament, reset } from '../features/counter/counterSlice';

const counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return(
        <div> 
            <h1> {count} </h1>
            <button onClick={() => {dispatch(increament())}}><h1>+</h1></button>
            <button onClick={() => {dispatch(decreament())}}><h1>-</h1></button>  
            <button onClick={() => {dispatch(reset())}}><h1>reset</h1></button>
        </div>
    )
}
export default counter

