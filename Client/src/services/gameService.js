const baseUrl = 'http://127.0.0.1:8000/api/v1';

export const create = async (gameData) => {
    const response = await fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
}