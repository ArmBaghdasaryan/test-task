export const sendRequest = (url, method) => {
    return fetch( url, {
        method,
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

