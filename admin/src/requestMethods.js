import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTI5MzU3OGQ0NjQ0ZTNhYmY3YzUxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ3MTEyMywiZXhwIjoxNjU1NzMwMzIzfQ.FNbVjeC7xCsASldTxips8wjUUCCQ0LjQN1jkaWrHssU";

export const publicRequest = axios.create({
	baseURL: BASE_URL
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: {token:`Bearer ${TOKEN}`}
})