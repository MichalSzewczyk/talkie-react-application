export default (query) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.open('POST', '/test', true);

        xhr.onreadystatechange = function () {//Call a function when the state changes.
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                // Request finished. Do processing here.
                resolve(xhr)
            } else {
                reject(xhr)
            }
        }

        xhr.send(query)
    })
}