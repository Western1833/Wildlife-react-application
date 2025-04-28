import {request} from '../lib/request.js';
const baseUrl = 'http://127.0.0.1:8000/api/v1/items';

export const createGame = async (gameData) => {
    await request('POST', baseUrl, gameData);
}

export const getAllGames = async() => {
    const response = await request('GET', baseUrl);

    return response.data;
}