import React, { useContext } from "react";
import addToCartImage from "../assets/icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

import Image from "next/image";

import styles from "@styles/ProductItem.module.scss";

const ProductItem = ({ product }) => {
  const { addToCart, state, handleMyProductInfo, updateMyProductInfo } =
    useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  const handleInfo = (prod) => {
    handleMyProductInfo(prod);
  };

  const updateInfo = (products) => {
    updateMyProductInfo(products);
  };

  return (
    <div>
      {state.productState ? (
        <div className={styles.ProductItem}>
		<div onClick={() => updateInfo(product)}>
          <Image
            src={product.images[0]}
            width="100%"
            height="100%"
            layout="responsive"
            alt={product.title}
          />
		  </div>
          <div className={styles["product-info"]}>
            <div>
              <p>$ {product.price}</p>
              <p>{product.title}</p>
            </div>
            <div className={styles.figure} onClick={() => handleClick(product)}>
              <Image
                src={addToCartImage}
                width={40}
                height={40}
                className={styles.addTocart}
                alt="addTocart"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.ProductItem}>
		<div onClick={() => handleInfo(product)}>
          <Image
            src={product.images[0]}
			className={styles.imageOfProductItem}
            width="100%"
            height="100%"
            layout="responsive"
            alt={product.title}
          />
		</div>
          <div className={styles["product-info"]}>
            <div>
              <p>$ {product.price}</p>
              <p>{product.title}</p>
            </div>
			<div className={styles.figure} onClick={() => handleClick(product)}>
			<Image
                src={addToCartImage}
                width={40}
                height={40}
                className={styles.addTocart}
                alt="addTocart	"
              />

			</div>
           
              
           
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
