import { KEYS } from "../../support/models";

describe("Teste de Login e Autenticação", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    it("LOGIN - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando logar");

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/login`,
                failOnStatusCode: true,
                headers: {
                    ...Cypress.env("options"),
                    "Content-Type": "application/json",
                },
                body: {
                    "username": "Test_automation",
                    "email": "Test_automation@hotmail.com",
                    "password": "teste123"
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body)}`);

                const data = response.body.dados;

                localStorage.setItem(KEYS.TOKEN, JSON.stringify(data));

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger("Falha ao logar", error);
            throw Error(error.message);
        }
    });

    it("LOGOUT - SUCCESSFUL", () => {
        try {
            cy.logger("Tentando deslogar");

            cy.request({
                method: "POST",
                delay: 500,
                url: `${Cypress.env("baseUrl")}/logout`,
                failOnStatusCode: true,
                headers: {
                    ...Cypress.env("options"),
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                cy.logger(`Retorno=${JSON.stringify(response.body)}`);
                
                const data = response.body.dados;

                expect(response).to.have.property("status", 200);
                expect(data).to.not.be.null;
            });

        } catch (error) {
            cy.logger("Falha ao deslogar", error);
            throw Error(error.message);
        }
    });
});