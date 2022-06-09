import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTI5MzU3OGQ0NjQ0ZTNhYmY3YzUxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDc3OTE0MiwiZXhwIjoxNjU1MDM4MzQyfQ.uDh64tbvr21kFOT24eU2KYKgMFAZ5VQKIVp31gCfnwA";

export const publicRequest = axios.create({
	baseURL: BASE_URL
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: {token:`Bearer ${TOKEN}`}
})