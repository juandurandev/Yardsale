import React, { useContext } from "react";
import Image from "next/image";
import AppContext from "../context/AppContext";

import close from "../assets/icons/icon_close.png";

import styles from "../styles/OrderItem.module.scss";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <>
      <div className={styles.OrderItem}>
        <figure>
          <Image
            src={product.images[0]}
            width="100%"
            height="100%"
            alt="product title"
          />
        </figure>
        <p>{product?.title}</p>
        <p>${product?.price}</p>
        <figure>
          <Image
            src={close}
            width={20}
            className={styles.closeImage}
            alt="close"
            onClick={() => handleRemove(product)}
          />
        </figure>
      </div>
    </>
  );
};

export default OrderItem;
