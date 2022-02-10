import React from "react";
import back from "../assets/icons/flechita.svg";
import addToCarts from "../assets/icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";
import { useContext } from "react/cjs/react.development";
import Image from "next/image";

import styles from "../styles/ProductInfo.module.scss";

const ProductInfo = () => {
  const { state, handleMyProductInfo, addToCart } = useContext(AppContext);

  const closeProductInfo = () => {
    handleMyProductInfo();
  };

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <>
      <div className={styles.ProductInfo}>
        <div className={styles.back}>
          <Image
            className={styles.BackArrow}
			width={15}
			height={15}
			objectFit="cover"
            src={back}
            alt="back"
            onClick={() => closeProductInfo()}
          />
        </div>
        <div className="image">
          <Image
            src={state.productInfo.images[0]}
            className={styles.productInfoImage}
			width={300}
			height={200}
            layout="responsive"
            objectFit="cover"
            alt="bike"
          />
        </div>
        {console.log(state.productInfo)}

        <div className={styles.price}>{state.productInfo.price}</div>
        <div className={styles.titleProductInfo}>{state.productInfo.title}</div>
        <div className={styles.descripcion}>
          {state.productInfo.description}
        </div>
        <button
          className={styles["primary-buttonProducInfo"]}
		
          onClick={() => handleClick(state.productInfo)}
        >
          <Image src={addToCarts} with="100%" height={30} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
