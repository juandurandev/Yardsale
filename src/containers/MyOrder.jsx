import React,{ useContext,useRef } from 'react';
import Link from 'next/link';
import OrderItem from '../components/OrderItem';

import backOrderButton from '../assets/icons/flechita.svg';

import AppContext from '../context/AppContext';
import Image from 'next/image';


import styles from '../styles/MyOrder.module.scss'

const MyOrder = () => {
	const {state,handleMyOrder} = useContext(AppContext);
	
	

  	const closeOrder = () => {
    	handleMyOrder();
	
  	}

	const sumTotal = () => {
		const reducer = (accumalator,currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}


	const myRef = useRef(state.cart)


	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={backOrderButton} className={styles.backImage} width={20} onClick={() => closeOrder()} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((product) => (
					<OrderItem product={product} key={`orderItem-	${product.id}`} />

				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<div className={styles['primary-button']}>
				<Link href="/checkout">
					Checkout
					
				</Link>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;