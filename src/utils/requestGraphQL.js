import { connectionURL } from './../constants/XHR'

export default (query, xhr) => {
    return Promise.race([
        new Promise((resolve, reject) => {
            xhr.open('POST', connectionURL, true);

            xhr.onreadystatechange = function () {//Call a function when the state changes.
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // Request finished. Do processing here.
                        const response = JSON.parse(xhr.response)
                        resolve(response)
                        return;
                    }
                    reject('Request aborted')
                }
            }

            xhr.send(query)
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(' (╯°□°）╯︵ ┻━┻: [Timeout] Could not connect to server'));
            }, 10000)
        })
    ])
}