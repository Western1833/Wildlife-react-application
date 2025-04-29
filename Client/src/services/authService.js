import { request } from "../lib/request.js"

const baseUrl = 'http://127.0.0.1:8000/api/v1/users';

export const login = async (email, password) => {
    const response = await request('POST', `${baseUrl}/login`, {email, password});

    return response;
}