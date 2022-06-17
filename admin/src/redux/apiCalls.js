import {loginStart, loginSuccess, loginFailure} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user)
		dispatch(loginSuccess(res.data))
	} catch(err) {
		console.log(err);
		dispatch(loginFailure(err));
	}
}