import React, { useState, useContext } from "react";
import Link from 'next/link';
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import ProductInfo from "./ProductInfo";
import AppContext from "../context/AppContext";
import Image from 'next/image';

import styles from '../styles/Header.module.scss';


const Header = () => {
  const { state, handleMyOrder } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav} >
      <Image src={menu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
      <Link href="/" passHref>
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
      </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => handleMyOrder()}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length} </div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {state.cartOpen ? <MyOrder /> : null}
      {state.productState ? <ProductInfo /> : null}
    </nav>
  );
};

export default Header;
