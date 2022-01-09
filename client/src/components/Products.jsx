import React from 'react';
import styled from 'styled-components';
import { PopularProducts } from '../data';
import Product from './Product';


const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	flex: 1 0 21%;
	margin: 2%;
	justify-content: space-between;
`

const Products = () => {
	return (
		<Container>
			{ PopularProducts.map(item => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	)
}

export default Products