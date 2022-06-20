import React, { useState, useEffect} from 'react';
import { useDispatch } from '@reduxjs/toolkit';

import "./NewProduct.css";

export default function NewProduct() {
	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Product</h1>
			<form className="addProductForm">
				<div className="addProductItem">
					<label>Image</label>
					<input type="file" id="file" />
				</div>
				<div className="addProductItem">
					<label>Title</label>
					<input type="text" placeholder="Black T-Shirt" />
				</div>
				<div className="addProductItem">
					<label>Description</label>
					<input type="text" placeholder="Description..." />
				</div>
				<div className="addProductItem">
					<label>Price</label>
					<input type="text" placeholder="2500" />
				</div>
				<div className="addProductItem">
					<label>Categories</label>
					<input type="text" placeholder="t-shirts, hoodies" />
				</div>
				<div className="addProductItem">
					<label>Sizes</label>
					<div className="size">
						<input type="checkbox" id="XS" value="XS" name="XS"/>
						<label htmlFor="XS">XS</label>
					</div>
					<div className="size">
						<input type="checkbox" id="S" value="S" name="S"/>
						<label htmlFor="S">S</label>
					</div>
					<div className="size">
						<input type="checkbox" id="M" value="M" name="M"/>
						<label htmlFor="M">M</label>
					</div>
					<div className="size">
						<input type="checkbox" id="L" value="L" name="L"/>
						<label htmlFor="L">L</label>
					</div>
					<div className="size">
						<input type="checkbox" id="XL" value="XL" name="XL"/>
						<label htmlFor="xL">XL</label>
					</div>
				</div>
				<div className="addProductItem">
					<label>In Stock</label>
					<select name="inStock" id="inStock">
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<button className="addProductButton">
					Create
				</button>
			</form>
		</div>
	)
}
