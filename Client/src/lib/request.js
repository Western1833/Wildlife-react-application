export async function request(method, url, body){
    const options = {
        method,
        headers: {}
    }

    if(body !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if(!response.ok) throw new Error('Request failed!');

    const result = await response.json();

    return result;
}