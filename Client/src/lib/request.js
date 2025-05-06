export async function request(method, url, body) {
    const options = {
        method,
        headers: {},
        credentials: 'include'  // 👈 important for cookies!
    };

    if (body !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) throw new Error('Request failed!');

    if(response.status !== 204){
        const result = await response.json();
        return result;
    }

    return;
}
