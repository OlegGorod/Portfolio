const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json();
};

async function getResource(data) {
    const response = await fetch(data);
    if (!response.ok) {
        throw new Error('Fetch');
    }
    return response.json();
}

export {postData};
export {getResource};