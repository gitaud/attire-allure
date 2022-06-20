import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { getProducts, deleteProduct } from "../../redux/apiCalls";

import "./ProductList.css";

export default function ProductList() {

	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);

	useEffect(() => {
		getProducts(dispatch);
	}, [dispatch]);


	const handleDelete = (id) => {
		deleteProduct(id, dispatch)
	}

	const columns = [
		{ field: "_id", headerName: "ID", width: 220 },
		{ 
			field: "product", 
			headerName: "product", 
			width: 260, 
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.title}
					</div>
				)
			}
		},
		{ 
			field: "inStock",
			headerName: "In Stock",
			width: 150
		},
		{ 
			field: "price",
			headerName: "price",
			type: "number",
			width: 130
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row._id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={ () => handleDelete(params.row._id)} />
					</>			
				)
			}
		}
	];

	return (
		<div className="productList">
			<DataGrid 
				rows={products} 
				disableSelectionOnClick 
				columns={columns} 
				rowsPerPageOption={6}
				pageSize={6}
				getRowId={row => row._id} 
				checkboxSelection />
		</div>
	)
}
