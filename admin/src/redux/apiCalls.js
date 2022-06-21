import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { 
	getProductStart, 
	getProductSuccess, 
	getProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	addProductStart,
	addProductSuccess,
	addProductFailure,
} from "./productRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user)
		dispatch(loginSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(loginFailure(err));
	}
}

export const getProducts = async (dispatch) => {
	dispatch(getProductStart());
	try {
		const res = await publicRequest.get("/products");
		dispatch(getProductSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(getProductFailure());
	}
}

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await userRequest.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(id));
	} catch(err) {
		console.log(err);
		dispatch(deleteProductFailure());
	}
}

export const updateProduct = async (id, product, dispatch) => {
	dispatch(updateProductStart());
	try {
		const res = await userRequest.put(`/products/${id}`, { product });
		dispatch(updateProductSuccess({ id, product: res.data }));
	} catch(err) {
		console.log(err);
		dispatch(updateProductFailure());
	}
}

export const addProduct = async (product, dispatch) => {
	dispatch(addProductStart());
	try {
		const res = await userRequest.post("/products", product);
		dispatch(addProductSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(addProductFailure());
	}
}