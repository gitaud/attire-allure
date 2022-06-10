import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
// import { PopularProducts } from '../data';
import Product from './Product';


const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
	
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					 cat 
					 	? `http://localhost:5000/api/products?category=${cat}` 
						: "http://localhost:5000/api/products"
					);
				setProducts(res.data);
			} catch(err) {
				console.log(err);
			}
		}
		getProducts();
	}, [cat]);

	useEffect(() => {
		cat ? setFilteredProducts(
			products.filter(item => 
				Object.entries(filters).every(([key, value]) => 
					item[key].includes(value)
				)
			)
		) : setFilteredProducts(products);
	}, [products, cat, filters]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prev) =>
			 [...prev].sort((a, b) => a.createdAt - b.createdAt)
			)
		} else if ((sort === "asc")) {
			setFilteredProducts((prev) =>
			 [...prev].sort((a, b) => a.price - b.price)
			)
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			)
		}
	}, [products, sort]);

	return (
		<Container>
			{ filteredProducts.map((product, index) => (
				<Product item={product} key={index} />
			))}
		</Container>
	)
}

export default Products