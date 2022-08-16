import "cypress-localstorage-commands";
import axios from 'axios';

Cypress.Commands.add("login", (client, authKey) => {
    const authData = JSON.parse(localStorage.getItem(authKey));

    if (authData && authData.token) {
        return;
    }

    cy.request({
        method: "POST",
        delay: 500,
        url: `${Cypress.env("baseUrl")}/login`,
        failOnStatusCode: true,
        headers: {
            ...Cypress.env("options")
        },
        body: {
            "username": "string",
            "email": "string",
            "password": "string"
        },
    })
        .then(response => {
            cy.logger(`Retorno=${JSON.stringify(response.body)}`);
            const data = response.body;
            localStorage.setItem(authKey, JSON.stringify(data));
        })
});

Cypress.Commands.add("logger", (msg, error) => {

    if (error) {
        console.log(`${msg} error=${JSON.stringify(error)}`);
        Cypress.log({
            name: msg,
            message: JSON.stringify(error)
        });
    } else {
        console.log(`${msg}`);
        Cypress.log({ name: msg });
    }
});

Cypress.Commands.add("axios", (request) => {

    const formData = new FormData();

    if (request.body) {
        Object.keys(request.body).forEach(key => formData.append(key, request.body[key]));
    }

    const axiosInstance = axios.request({
        url: request.url,
        method: request.method,
        headers: request.headers,
        data: request.body ? formData : null,
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error.response;
    });

    return axiosInstance;
});

Cypress.Commands.add('form_request', (method, url, formData, done) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        done(xhr);
    };
    xhr.onerror = function () {
        done(xhr);
    };
    xhr.send(formData);
})
