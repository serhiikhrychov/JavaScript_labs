"use strict";

const requestUrl = "https://jsonplaceholder.typicode.com/users"

const body = {
    name: 'somename',
    age: 31
}

function sendRequest(method, url, bodyArg = null, responseType) {
    const headers = {
        'content-type': 'application/json'
    }
    let body;
    if (bodyArg) {
        body = JSON.stringify(bodyArg)
    } else {
        body = null
    }

    return fetch(url, {
        method: method,
        body: body,
        headers: headers
    }).then(response => {
        if (response.ok && responseType === "text") {
            return response.text()
        } else if (response.ok && responseType === "json") {
            return response.json()
        } else if (response.ok && responseType === "status") {
            return response.status
        }
        return response.json().then(error => {
            const e = new error('something goes wrong!')
            e.data = error
            throw e
        })
    })
}

sendRequest('get', requestUrl, null, "text")
    .then(data => textArea.value = data)
    .catch(err => console.log(err))

sendRequest('get', requestUrl, null, "json")
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequest('post', requestUrl, body, "json")
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequest('post', requestUrl, body, "status")
    .then(data => textArea.value = data)
    .catch(err => console.log(err))
