export default (query) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.open('POST', 'http://localhost:8080', true);

        xhr.onreadystatechange = function () {//Call a function when the state changes.
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Request finished. Do processing here.
                    resolve(xhr)
                    return;
                }
                reject(new Error('Could not connect to server'))

            }
        }

        xhr.send(query)
    })
}