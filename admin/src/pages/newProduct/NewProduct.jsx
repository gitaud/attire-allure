import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addProduct } from "../../redux/apiCalls";
import app from "../../firebase";

import "./NewProduct.css";

export default function NewProduct() {

	const dispatch = useDispatch();

	const [ inputs, setInputs] = useState({});
	const [ file, setFile ] = useState(null);
	const [ cat, setCat ] = useState([]);

	const handleChange = (e) => {
		setInputs(prev => {
			return {...prev, [e.target.name]: e.target.value}
		})
	}

	const handleCat = (e) => {
		setCat(e.target.value.split(","));
	}

	const handleSize = () => {
		let sizes = document.getElementsByClassName("sizeItem");
		let sizesArr = []
		for (let i = 0; i < sizes.length; ++i) {
			if (sizes[i].checked) {
				sizesArr.push(sizes[i].value);
			}
		}
		setInputs(prev => {
			return {...prev, "size": sizesArr}
		})
	}

	const handleClick = (e) => {
		e.preventDefault();
		// todo: upload file
		const fileName = new Date().getTime() + file.name;
		const storage = getStorage(app);
		const storageRef = ref(storage, fileName);

		const uploadTask = uploadBytesResumable(storageRef, file);

		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on('state_changed',
			(snapshot) => {
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
				}
			}, 
			(error) => {
				// A full list of error codes is available at
				// https://firebase.google.com/docs/storage/web/handle-errors
				switch (error.code) {
					case 'storage/unauthorized':
						console.log("User doesn't have permission to access the object")
						break;
					case 'storage/canceled':
						// User canceled the upload
						break;

					// ...

					case 'storage/unknown':
						console.log("Unknown error occurred, inspect error.serverResponse")
						break;
					default:
				}
			}, 
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					const product = {...inputs, img: downloadURL, categories: cat};
					addProduct(product, dispatch);
				});
			}
		);
	}

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Product</h1>
			<form className="addProductForm">
				<div className="addProductItem">
					<label>Image</label>
					<input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
				</div>
				<div className="addProductItem">
					<label>Title</label>
					<input type="text" name="title" placeholder="Black T-Shirt" onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>Description</label>
					<input type="text" name="desc" placeholder="Description..." onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>Price</label>
					<input type="number" name="price" placeholder="2500" onChange={handleChange}/>
				</div>
				<div className="addProductItem">
					<label>Categories</label>
					<input type="text" name="cat" placeholder="t-shirts, hoodies" onChange={handleCat} />
				</div>
				<div className="addProductItem">
					<label>Sizes</label>
					<div className="size">
						<input type="checkbox" className="sizeItem" id="XS" value="XS" name="XS" onClick={handleSize}/>
						<label htmlFor="XS">XS</label>
					</div>
					<div className="size">
						<input type="checkbox" className="sizeItem" id="S" value="S" name="S" onClick={handleSize}/>
						<label htmlFor="S">S</label>
					</div>
					<div className="size">
						<input type="checkbox" className="sizeItem" id="M" value="M" name="M" onClick={handleSize}/>
						<label htmlFor="M">M</label>
					</div>
					<div className="size">
						<input type="checkbox" className="sizeItem" id="L" value="L" name="L" onClick={handleSize}/>
						<label htmlFor="L">L</label>
					</div>
					<div className="size">
						<input type="checkbox" className="sizeItem" id="XL" value="XL" name="XL" onClick={handleSize}/>
						<label htmlFor="XL">XL</label>
					</div>
				</div>
				<div className="addProductItem">
					<label>In Stock</label>
					<select name="inStock" id="inStock" onChange={handleChange}>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<button onClick={handleClick} className="addProductButton">
					Create
				</button>
			</form>
		</div>
	)
}