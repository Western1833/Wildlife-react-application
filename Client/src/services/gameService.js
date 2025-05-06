import {request} from '../lib/request.js';
const baseUrl = 'http://localhost:8000/api/v1/items';

export const createGame = async (gameData) => {
    await request('POST', baseUrl, gameData);
}

export const getSingleGame = async (id) => {
    const response = await request('GET', `${baseUrl}/${id}`);

    return response.item;
}

export const getAllGames = async() => {
    const response = await request('GET', baseUrl);

    return response.data;
}

export const getLatestThree = async() => {
    const response = await request('GET', `${baseUrl}?sort=-createdAt&limit=3`);

    return response.data;
}

export const gameEdit = async(id, gameData) => {
    await request('PATCH', `${baseUrl}/${id}`, gameData);
}

export const gameDelete = async (id) => {
    await request('DELETE', `${baseUrl}/${id}`);
}