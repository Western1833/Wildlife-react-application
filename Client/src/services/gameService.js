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