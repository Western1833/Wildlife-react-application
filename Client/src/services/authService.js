import { request } from "../lib/request.js"

const baseUrl = 'http://localhost:8000/api/v1/users';

export const login = async (email, password) => {
    const response = await request('POST', `${baseUrl}/login`, {email, password});

    return response;
}

export const register = async (email, password, passwordConfirm) => {
    const response = await request('POST', `${baseUrl}/signup`, {email, password, passwordConfirm});

    return response;
}

export const logout = async () => {
    await request('GET', `${baseUrl}/logout`);
}