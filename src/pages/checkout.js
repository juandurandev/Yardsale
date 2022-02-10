import React, { useContext } from "react";

import OrderItem from "../components/OrderItem";

import styles from "../styles/Checkout.module.scss";

import AppContext from "context/AppContext";

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
		const reducer = (accumalator,currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	};


  const artSumTotal = () => {
    return state.cart.length;
  };
  
  return (
    <>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles.title}>My order</h1>
              {state.cart.map((product) => {
                return(

                <OrderItem product={product} key={`orderItem-	${product.id}`} />
                );
              })}
          <div className={styles["Checkout-content"]}>
            <div className={styles.order}>
              
                <span>{artSumTotal()} articles</span>
           
              <p>$ {sumTotal()}</p>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Checkout;
