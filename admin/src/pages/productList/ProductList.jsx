import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from "../../dummyData"

import "./ProductList.css";

export default function ProductList() {

	const [data, setData] = useState(productRows)

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	}

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ 
			field: "product", 
			headerName: "product", 
			width: 200, 
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.name}
					</div>
				)
			}
		},
		{ 
			field: "status",
			headerName: "Status",
			width: 100
		},
		{ 
			field: "price",
			headerName: "price",
			type: "number",
			width: 100
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={ () => handleDelete(params.row.id)} />
					</>			
				)
			}
		}
	];

	return (
		<div className="productList">
			<DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection />
		</div>
	)
}
