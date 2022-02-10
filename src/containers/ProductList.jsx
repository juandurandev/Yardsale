import React,{useEffect,useState} from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';

import AppContext from '../context/AppContext';
import { useContext } from 'react/cjs/react.development';

import styles from '../styles/ProductList.module.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);




	return (
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
			{products.map((product) => (
				<ProductItem product={product} key={product.id} />
			))}
			</div>
		</section>
	);
}

export default ProductList;