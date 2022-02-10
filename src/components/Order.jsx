/* import React, { useContext } from 'react';
import '../styles/Order.scss';
import Image from 'next/image';

import backArrow from '../assets/icons/flechita.svg';

import AppContext from 'context/AppContext';


const Order = () => {

	const {state} = useContext(AppContext);
	return (
		<div className="Order">
		{state.cart.map((product) => {
			<OrderItem product={product} key={`orderItem-	${product.id}`} />
		})}
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			
		</div>
	);
};

export default Order;  */