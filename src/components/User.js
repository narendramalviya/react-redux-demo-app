import React from "react";
import { buyCake,refillStock } from "../redux/cake/cakeAction";
import {useSelector, useDispatch} from 'react-redux'
const User = (props) => {
	const numOfCakes = useSelector(state => state.cakeReducer.numOfCakes)
	const dispatch = useDispatch();
	console.log("props", dispatch);
	return (
		<div>
			{/* {props.users.map((val,index)=> ( <p>{index}</p> ))} */}
			<p>User </p>
            <p>Cakes: {numOfCakes}</p>
			<button onClick={()=> dispatch(buyCake())}>Buy cake</button>
			<button onClick={()=> dispatch(refillStock())}>Refil stock</button>
		</div>
	);
};


export default User;
